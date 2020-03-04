import { async, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material';
import { TestBedHelper } from '../../../../../../common/src/app/spec/spec-utils';
import { LegislationAddEditComponent } from './legislation-add-edit.component';

describe('LegislationAddEditComponent', () => {
  const testBedHelper = new TestBedHelper<LegislationAddEditComponent>(LegislationAddEditComponent);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LegislationAddEditComponent],
      imports: [ReactiveFormsModule, MatAutocompleteModule]
    }).compileComponents();
  }));

  it('should create', () => {
    const { component, fixture } = testBedHelper.createComponent(false);

    const act = new FormControl({});
    const regulation = new FormControl({});
    const section = new FormControl({});
    const subSection = new FormControl({});
    const paragraph = new FormControl({});

    component.formGroup = new FormGroup({ act, regulation, section, subSection, paragraph });

    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
