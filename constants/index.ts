import { ScreenType, ScriptType } from "@/databases/queries/scripts";
import { Preferences } from "@/types";

export const defaultPreferences = { 
    fontSize: {}, 
    fontWeight: {}, 
    fontStyle: {}, 
    textColor: {}, 
    backgroundColor: {}, 
    highlight: {},
} as Preferences;

export const scriptsPageTabs = [
    { value: 'screens', label: 'Screens', },
    { value: 'diagnoses', label: 'Diagnoses', },
    { value: 'print', label: 'Print', },
    { value: 'drugs-library', label: 'Drugs library', },
];

export const scriptTypes = [
    { label: 'Admission', value: 'admission', },
    { label: 'Discharge', value: 'discharge', },
    { label: 'Neolab', value: 'neolab', },
] as { label: string; value: ScriptType['type'] }[];

export const screenTypes = [
    { value: 'checklist', label: 'Checklist' },
    { value: 'form', label: 'Form' },
    { value: 'management', label: 'Management' },
    { value: 'multi_select', label: 'Multiple choice list' },
    // { value: 'list', label: 'Simple list' },
    { value: 'single_select', label: 'Single choice list' },
    { value: 'progress', label: 'Progress' },
    { value: 'timer', label: 'Timer' },
    { value: 'yesno', label: 'Yes/No' },
    { value: 'drugs', label: 'Drug, Fluid and Feeds' },
    { value: 'zw_edliz_summary_table', label: 'EDLIZ summary table (ZW)' },
    { value: 'mwi_edliz_summary_table', label: 'EDLIZ summary table (MWI)' },
    { value: 'diagnosis', label: 'Diagnosis' },
] as { label: string; value: ScreenType['type'] }[];

export const SymptomTypes = [
    { value: 'risk', label: 'Risk factor', },
    { value: 'sign', label: 'Sign/Symptom', },
];
