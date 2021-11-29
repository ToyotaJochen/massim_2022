export type Redraw = () => void;

export type ConnectionState = 'offline' | 'online' | 'connecting' | 'error';

export type BlockType = string;

export interface StaticWorld {
  sim: string;
  grid: Grid;
  teams: { [key: string]: Team };
  blockTypes: BlockType[];
  steps: number;
}

export interface Team {
  name: string;
}

export interface Grid {
  width: number;
  height: number;
}

export interface DynamicWorld {
  step: number;
  obstacles: Obstacle[];
  goalZones: GoalZone[];
  roleZones: RoleZone[];
  entities: Entity[];
  blocks: Block[];
  dispensers: Dispenser[];
  tasks: Task[];
  clear: ClearEvent[];
  scores: [string, number][];
}

export type Pos = [number, number];

export interface Positionable {
  pos: Pos;
}

export interface Zone extends Positionable {
  r: number;
}

export interface Obstacle extends Positionable {}

export interface GoalZone extends Zone {}

export interface RoleZone extends Zone {}

export interface EntityStatus {
  name: string;
  team: string;
  action: string; // can be empty string before first step
  actionResult: string;
}

export interface Entity extends Positionable, EntityStatus {
  id: number;
  energy: number;
  vision: number;
  attached?: Pos[];
  disabled?: boolean;
  actionParams: string[];
}

export interface Block extends Positionable {
  type: BlockType;
  attached?: Pos[];
}

export interface Dispenser extends Positionable {
  id: number;
  type: BlockType;
}

export interface Task {
  reward: number;
  name: string;
  deadline: number;
  requirements: Block[];
}

export interface ClearEvent extends Zone {}

export interface Rect {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
  width: number;
  height: number;
}
