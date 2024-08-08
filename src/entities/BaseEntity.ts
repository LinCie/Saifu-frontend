export class BaseEntity {
  id: string;
  createdAt: Date;
  lastUpdated: Date;

  constructor(base: Partial<BaseEntity> = {}) {
    this.id = base.id ?? "";
    this.createdAt = base.createdAt ?? new Date();
    this.lastUpdated = base.lastUpdated ?? new Date();
  }
}
