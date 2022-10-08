import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryTileComponent } from './memory-tile.component';

describe('MemoryTileComponent', () => {
  let component: MemoryTileComponent;
  let fixture: ComponentFixture<MemoryTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoryTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
