import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import queryString from "query-string";
import { v4 as uuidv4 } from "uuid";
import { useMeasure } from "react-use";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader } from "@/components/loader";
import { useDrugsLibrary, type DrugsLibraryState } from "@/hooks/use-drugs-library";

const getDefaultForm = (item?: DrugsLibraryState['drugs'][0]) => ({
    itemId: `${item?.itemId || uuidv4()}`,
    key: `${item?.key || ''}`,
    drug: `${item?.drug || ''}`,
    minGestation: `${item?.minGestation || ''}`,
    maxGestation: `${item?.maxGestation || ''}`,
    minWeight: `${item?.minWeight || ''}`,
    maxWeight: `${item?.maxWeight || ''}`,
    dayOfLife: `${item?.dayOfLife || ''}`,
    dosageText: `${item?.dosageText || ''}`,
    managementText: `${item?.managementText || ''}`,
    gestationKey: `${item?.gestationKey || ''}`,
    weightKey: `${item?.weightKey || ''}`,
});

export function DrugsLibraryForm({ disabled, item, floating, onChange }: {
    disabled?: boolean;
    item?: DrugsLibraryState['drugs'][0];
    floating?: boolean;
    onChange: (item: DrugsLibraryState['drugs'][0]) => void;
}) {
    const [containerDivRef, containerDiv] = useMeasure<HTMLDivElement>();
    const [contentDivRef, contentDiv] = useMeasure<HTMLDivElement>();

    const [open, setOpen] = useState(false);
    const [form, setForm] = useState(getDefaultForm(item));

    const router = useRouter();
    const searchParams = useSearchParams(); 
    const searchParamsObj = useMemo(() => queryString.parse(searchParams.toString()), [searchParams]);
    const { itemId, addDrug } = searchParamsObj;

    const { keys, loading } = useDrugsLibrary();

    useEffect(() => {
        setOpen(!!itemId || !!addDrug);
    }, [itemId, addDrug]);

    useEffect(() => {
        setForm(getDefaultForm(item));
    }, [item]);

    const onSave = useCallback(() => {
        onChange({
            ...form,
            minWeight: Number(form.minWeight),
            maxWeight: Number(form.maxWeight),
            minGestation: Number(form.minGestation),
            maxGestation: Number(form.maxGestation),
        });
    }, [form, item, onChange]);

    const onClose = useCallback(() => {
        setOpen(false);
        setForm(getDefaultForm())

        router.push(`?${queryString.stringify({ 
            ...searchParamsObj, 
            itemId: undefined, 
            addDrug: undefined, 
        })}`);

        const scrollPos = containerDiv?.top || 0;
        setTimeout(() => window.scrollTo({ top: scrollPos, }), 500);
    }, [searchParamsObj, containerDiv, router.push]);

    const isFormComplete = useCallback(() => {
        return !!(
            form.key &&
            form.drug && 
            form.minWeight && 
            form.minGestation &&
            form.maxWeight && 
            form.maxGestation &&
            form.managementText &&
            form.dosageText &&
            Number(form.minGestation || '0') <= Number(form.maxGestation || '0') &&
            Number(form.minWeight || '0') <= Number(form.maxWeight || '0')
        );
    }, [form]);

    const isSaveButtonDisabled = useCallback(() => {
        return !isFormComplete() ||
            loading ||
            disabled;
    }, [isFormComplete, loading, disabled]);

    const formComponent = (
        <div className="flex flex-col gap-y-4">
            <div className="">
                <Label secondary htmlFor="drug">Drug *</Label>
                <Input
                    name="drug"
                    className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
                    value={form.drug}
                    disabled={disabled}
                    onChange={e => setForm(prev => ({ ...prev, drug: e.target.value, }))}
                />
            </div>

            <div className="">
                <Label secondary htmlFor="key">Key *</Label>
                <Input
                    name="key"
                    className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
                    value={form.key}
                    disabled={disabled}
                    onChange={e => setForm(prev => ({ ...prev, key: e.target.value, }))}
                />
            </div>

            <div className="flex gap-x-2">
                <div className="flex-1">
                    <Label secondary htmlFor="minGestation">Min Gestation (weeks) *</Label>
                    <Input
                        name="minGestation"
                        className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
                        value={form.minGestation}
                        type="number"
                        disabled={disabled}
                        onChange={e => {
                            const minGestation = e.target.value;
                            let maxGestation = form.maxGestation;

                            if (!minGestation) maxGestation = '';

                            setForm(prev => ({ 
                                ...prev, 
                                minGestation, 
                                maxGestation,
                            }));
                        }}
                    />
                </div>

                <div className="flex-1">
                    <Label 
                        secondary 
                        htmlFor="maxGestation"
                        error={Number(form.minGestation || '0') > Number(form.maxGestation || '0')}
                    >Max Gestation (weeks) *</Label>
                    <Input
                        name="maxGestation"
                        className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
                        value={form.maxGestation}
                        type="number"
                        disabled={disabled || !form.minGestation}
                        min={form.minGestation}
                        error={Number(form.minGestation || '0') > Number(form.maxGestation || '0')}
                        onChange={e => setForm(prev => ({ ...prev, maxGestation: e.target.value, }))}
                    />
                </div>
            </div>

            <div className="">
                <Label secondary htmlFor="gestationKey">Gestation Key *</Label>
                <Input
                    name="gestationKey"
                    className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
                    value={form.gestationKey}
                    disabled={disabled}
                    onChange={e => setForm(prev => ({ ...prev, gestationKey: e.target.value, }))}
                />
            </div>

            <div className="flex gap-x-2">
                <div className="flex-1">
                    <Label secondary htmlFor="minWeight">Min Weight (weeks) *</Label>
                    <Input
                        name="minWeight"
                        className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
                        value={form.minWeight}
                        type="number"
                        disabled={disabled}
                        onChange={e => {
                            const minWeight = e.target.value;
                            let maxWeight = form.maxWeight;

                            if (!minWeight) maxWeight = '';

                            setForm(prev => ({ 
                                ...prev, 
                                minWeight, 
                                maxWeight,
                            }));
                        }}
                    />
                </div>

                <div className="flex-1">
                    <Label 
                        secondary 
                        htmlFor="maxWeight"
                        error={Number(form.minWeight || '0') > Number(form.maxWeight || '0')}
                    >Max Weight (weeks) *</Label>
                    <Input
                        name="maxWeight"
                        className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
                        value={form.maxWeight}
                        type="number"
                        disabled={disabled || !form.minWeight}
                        min={form.minWeight}
                        error={Number(form.minWeight || '0') > Number(form.maxWeight || '0')}
                        onChange={e => setForm(prev => ({ ...prev, maxWeight: e.target.value, }))}
                    />
                </div>
            </div>

            <div className="">
                <Label secondary htmlFor="weightKey">Weight Key *</Label>
                <Input
                    name="weightKey"
                    className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
                    value={form.weightKey}
                    disabled={disabled}
                    onChange={e => setForm(prev => ({ ...prev, weightKey: e.target.value, }))}
                />
            </div>

            <div className="">
                <Label secondary htmlFor="managementText">Management text *</Label>
                <Input
                    name="managementText"
                    className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
                    value={form.managementText}
                    disabled={disabled}
                    onChange={e => setForm(prev => ({ ...prev, managementText: e.target.value, }))}
                />
            </div>

            <div className="">
                <Label secondary htmlFor="weight">Dosage text *</Label>
                <Input
                    name="dosageText"
                    className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
                    value={form.dosageText}
                    disabled={disabled}
                    onChange={e => setForm(prev => ({ ...prev, dosageText: e.target.value, }))}
                />
            </div>
        </div>
    );

    return (
        <>
            {loading && <Loader overlay />}

            <div ref={containerDivRef}>
                {floating === false ? formComponent : (
                    <Sheet
                        open={open}
                        onOpenChange={open => {
                            if (!open) onClose();
                        }}
                    >
                        <SheetContent
                            hideCloseButton
                            side="right"
                            className="p-0 m-0 flex flex-col w-full max-w-full sm:max-w-[80%] md:max-w-[80%] lg:max-w-[50%]"
                        >
                            <SheetHeader className="flex flex-row items-center py-2 px-4 border-b border-b-border text-left sm:text-left">
                                <SheetTitle>{addDrug ? 'Add' : ''}{itemId ? 'Edit' : ''} drug</SheetTitle>
                                <SheetDescription className="hidden"></SheetDescription>
                            </SheetHeader>

                            <div ref={contentDivRef} className="flex-1 py-2 px-0 overflow-y-auto">
                                <div className="px-4">
                                    {formComponent}
                                </div>
                            </div>

                            <div className="border-t border-t-border px-4 py-2 flex gap-x-2">
                                <span className="text-danger text-xs my-auto">* Required</span>

                                <div className="ml-auto" />

                                <SheetClose asChild>
                                    <Button
                                        variant="ghost"
                                        onClick={() => {}}
                                    >
                                        Cancel
                                    </Button>
                                </SheetClose>

                                <SheetClose asChild>
                                    <Button
                                        onClick={() => onSave()}
                                        disabled={isSaveButtonDisabled()}
                                    >
                                        Save
                                    </Button>
                                </SheetClose>
                            </div>
                        </SheetContent>
                    </Sheet>
                )}
            </div>
        </>
    );
}