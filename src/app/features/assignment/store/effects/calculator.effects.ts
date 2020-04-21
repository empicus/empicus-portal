import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as fromContentOrderWizardActions from '../actions/content-order-wizard.actions';
import * as fromAcademicOrderWizardActions from '../actions/academic-order-wizard.actions';
import { ContentOrderCalculatorService } from "../../services/calculators/content-order-calculator.service";
import { AcademicOrderCalculatorService } from "../../services/calculators/academic-order-calculator.service";

@Injectable()

export class CalculatorEffects {

    constructor(
        private actions$: Actions,
        private coCalculatorService: ContentOrderCalculatorService,
        private aoCalculatorService: AcademicOrderCalculatorService) { }

    /**
     * 
     */
    calculateContentOrderPriceEffect$ = createEffect(() => this.actions$.pipe(
            ofType(fromContentOrderWizardActions.calculateCowCostAction),
            map(action => {
                return fromContentOrderWizardActions.cowCostCalculatedAction(
                    {data : this.coCalculatorService.calculate(action.data) }
                )
            }),
        )
    );

    /**
     * 
     */
    calculateAcademicOrderPriceEffect$ = createEffect(() => this.actions$.pipe(
            ofType(fromAcademicOrderWizardActions.calculateAowCostAction),
            map(action => {
                return fromAcademicOrderWizardActions.aowCostCalculatedAction(
                    {data : this.aoCalculatorService.calculate(action.data) }
                )
            }),
        )
    );
    
    
}
