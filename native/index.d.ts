/* eslint-disable */

export class ExternalObject<T> {
  readonly '': {
    readonly '': unique symbol
    [K: symbol]: T
  }
}
export class MineBuffer {
  constructor(buf?: Buffer | undefined | null)
  reserve(size: number): void
  getBuffer(): Buffer
  remaining(): number
  get readOffset(): number
  set readOffset(offset: number)
  get writeOffset(): number
  set writeOffset(offset: number)
  static clone(): MineBuffer
  reset(): void
  peekUByte(): number
  seekDelta(delta: number): void
  readUByte(): number
  readBytes(len: number): Buffer
  readRemaining(): Buffer
  readByte(): number
  readBoolean(): boolean
  readInt(): number
  readUInt(): number
  readLong(): bigint
  readULong(): bigint
  readFloat(): number
  readDouble(): number
  readVarInt(): number
  readVarLong(): BigInt
  readString(): string
  readShort(): number
  readUShort(): number
  readPosition(): Vec3
  readUUID(): string
  writeBytes(buf: Buffer): void
  writeUByte(val: number): void
  writeByte(val: number): void
  writeBoolean(val: boolean): void
  writeFloat(val: number): void
  writeDouble(val: number): void
  writeInt(val: number): void
  writeUInt(val: number): void
  writeLong(val: BigInt): void
  writePosition(val: Vec3): void
  writeUUID(val: string): void
  writeShort(val: number): void
  writeUShort(val: number): void
  writeVarInt(val: number): void
  writeVarLong(val: BigInt): void
  writeString(val: string): void
}
export class Vec2 {
  x: number
  y: number
  constructor(x: number, y: number)
  static zero(): Vec2
  magnitude(): number
  angle(): number
  toString(): string
  toJSON(): string
  add(other: Vec2): void
  sub(other: Vec2): void
  mul(other: Vec2): void
  div(other: Vec2): void
  rotate(angle: number): void
  normalize(): void
  distance(other: Vec2): number
}
export class Vec3 {
  x: number
  y: number
  z: number
  constructor(x: number, y: number, z: number)
  static zero(): Vec3
  magnitude(): number
  angle(): number
  toString(): string
  toJSON(): string
  add(other: Vec3): void
  sub(other: Vec3): void
  mul(other: Vec3): void
  div(other: Vec3): void
  rotate(angle: number): void
  normalize(): void
  distance(other: Vec3): number
}
export class Vec5 {
  x: number
  y: number
  z: number
  yaw: number
  pitch: number
  constructor(x: number, y: number, z: number, yaw: number, pitch: number)
  static zero(): Vec5
  magnitude(): number
  angle(): number
  toString(): string
  toJSON(): string
  add(other: Vec5): void
  sub(other: Vec5): void
  mul(other: Vec5): void
  div(other: Vec5): void
  rotate(angle: number): void
  normalize(): void
  distance(other: Vec5): number
  toVec3(): Vec3
  toVec2(): Vec2
  intersectsWith(other: Vec3): boolean
}
