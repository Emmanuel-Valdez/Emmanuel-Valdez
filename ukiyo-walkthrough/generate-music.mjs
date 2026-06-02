import { Buffer } from "node:buffer";
import fs from "node:fs/promises";

const sampleRate = 44100;
const duration = 25;
const totalSamples = sampleRate * duration;
const channels = 2;
const dataSize = totalSamples * channels * 2;
const buffer = Buffer.alloc(44 + dataSize);

function writeString(offset, value) {
  buffer.write(value, offset, value.length, "ascii");
}

writeString(0, "RIFF");
buffer.writeUInt32LE(36 + dataSize, 4);
writeString(8, "WAVE");
writeString(12, "fmt ");
buffer.writeUInt32LE(16, 16);
buffer.writeUInt16LE(1, 20);
buffer.writeUInt16LE(channels, 22);
buffer.writeUInt32LE(sampleRate, 24);
buffer.writeUInt32LE(sampleRate * channels * 2, 28);
buffer.writeUInt16LE(channels * 2, 32);
buffer.writeUInt16LE(16, 34);
writeString(36, "data");
buffer.writeUInt32LE(dataSize, 40);

function envelope(t, every, attack = 0.015, decay = 0.18) {
  const phase = t % every;
  if (phase < attack) return phase / attack;
  return Math.max(0, 1 - (phase - attack) / decay);
}

for (let i = 0; i < totalSamples; i += 1) {
  const t = i / sampleRate;
  const barLift = t > 15 ? 1.15 : 1;
  const pad = Math.sin(2 * Math.PI * 110 * t) * 0.08 + Math.sin(2 * Math.PI * 220 * t) * 0.04;
  const pulse = Math.sin(2 * Math.PI * 55 * t) * envelope(t, 0.5, 0.01, 0.16) * 0.32;
  const arpFreq = [440, 554.37, 659.25, 830.61][Math.floor(t * 8) % 4];
  const arp = Math.sin(2 * Math.PI * arpFreq * t) * envelope(t, 0.125, 0.004, 0.055) * 0.11;
  const tick = Math.sin(2 * Math.PI * 1760 * t) * envelope(t + 0.25, 0.5, 0.002, 0.025) * 0.06;
  const value = Math.max(-1, Math.min(1, (pad + pulse + arp + tick) * barLift));
  const left = Math.round(value * 32767);
  const right = Math.round((value * 0.92 + arp * 0.18) * 32767);
  const offset = 44 + i * channels * 2;
  buffer.writeInt16LE(left, offset);
  buffer.writeInt16LE(right, offset + 2);
}

await fs.writeFile(new URL("./assets/tech-loop.wav", import.meta.url), buffer);
