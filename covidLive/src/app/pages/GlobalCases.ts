import { NumberValueAccessor } from '@angular/forms';

export class GlobalCases
{
    totalCases: number;
    recoveryCases: number;
    deathCases: number;
    lastUpdate: any;
    currentlyInfected: number;
    casesWithOutcome: number;
    mildConditionActiveCases: number;
    criticalConditionActiveCases: number;
    recoveredClosedCases: number;
    deathClosedCases: number;
    closedCasesRecoveredPercentage: number;
    closedCasesDeathPercentage: number;
    activeCasesMildPercentage: number;
    activeCasesCriticalPercentage: number;
    generalDeathRate: number;
    constructor( response: any)
    {
        this.totalCases = response.total_cases;
        this.recoveryCases = response.recovery_cases;
        this.deathCases = response.death_cases;
        this.lastUpdate = response.last_update;
        this.currentlyInfected = response.currently_infected;
        this.casesWithOutcome = response.cases_with_outcome;
        this.mildConditionActiveCases = response.mild_condition_active_cases;
        this.criticalConditionActiveCases = response.critical_condition_active_cases;
        this.recoveredClosedCases = response.recovered_closed_cases;
        this.deathClosedCases = response.death_closed_cases;
        this.closedCasesRecoveredPercentage = response.closed_cases_recovered_percentage;
        this.closedCasesDeathPercentage = response.closed_cases_death_percentage;
        this.activeCasesMildPercentage = response.active_cases_mild_percentage;
        this.activeCasesCriticalPercentage = response.active_cases_critical_percentage;
        this.generalDeathRate = response.general_death_rate;

    }
}