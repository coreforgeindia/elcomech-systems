import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2, ChevronRight, ChevronLeft, Upload, X } from 'lucide-react';

// ─── Step schemas ─────────────────────────────────────────────────────────────

const step1Schema = z.object({
  customerName: z.string().min(2, 'Required'),
  projectName: z.string().min(2, 'Required'),
  email: z.string().email('Valid email required'),
  phone: z.string().min(10, 'Valid phone required'),
  company: z.string().optional(),
});

const step3Schema = z.object({
  bottom100: z.string().optional(),
  bottom75: z.string().optional(),
  bottom50: z.string().optional(),
  top100: z.string().optional(),
  top75: z.string().optional(),
  top50: z.string().optional(),
});

const step4Schema = z.object({
  wiringNeeded: z.enum(['yes', 'no']),
  wiringDetails: z.string().optional(),
  testerType: z.string().optional(),
  cableType: z.enum(['awg26', 'awg30', 'others', 'both']),
  cableOther: z.string().optional(),
});

const step5Schema = z.object({
  fixtureType: z.enum(['vacuum', 'pneumatic', 'manual', 'rf']),
  manualType: z.enum(['low-cost', 'standard', '']).optional(),
  interfacePanel: z.enum(['yes', 'no']).optional(),
  interfaceBlocks: z.array(z.string()).optional(),
  connectors: z.string().optional(),
});

const step6Schema = z.object({
  extras: z.array(z.string()).optional(),
  connectorSide: z.enum(['top', 'bottom', 'side', 'none']),
  connectorConnect: z.enum(['manual', 'pneumatic', 'none']).optional(),
  vacuumPressure: z.string().optional(),
  pcbOrientation: z.string().optional(),
  multiPanel: z.enum(['yes', 'no']),
});

// ─── Types ────────────────────────────────────────────────────────────────────

type FormData = {
  step1: z.infer<typeof step1Schema>;
  step3: z.infer<typeof step3Schema>;
  step4: z.infer<typeof step4Schema>;
  step5: z.infer<typeof step5Schema>;
  step6: z.infer<typeof step6Schema>;
  gerberUploaded: boolean;
  cadUploaded: boolean;
  testPointsUploaded: boolean;
};

const TOTAL_STEPS = 7;

const stepTitles = [
  'Customer & Project Details',
  'PCB Information',
  'Test Point Details',
  'Wiring & Interface',
  'Fixture Configuration',
  'Extras & Orientation',
  'Review & Submit',
];

// ─── Step Components ──────────────────────────────────────────────────────────

function Step1({ onNext }: { onNext: (d: z.infer<typeof step1Schema>) => void }) {
  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof step1Schema>>({
    resolver: zodResolver(step1Schema),
  });
  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Customer Name *" error={errors.customerName?.message}>
          <input {...register('customerName')} placeholder="Your full name" className={inputCls} />
        </Field>
        <Field label="Project Name *" error={errors.projectName?.message}>
          <input {...register('projectName')} placeholder="Project identifier" className={inputCls} />
        </Field>
        <Field label="Email Address *" error={errors.email?.message}>
          <input {...register('email')} type="email" placeholder="you@company.com" className={inputCls} />
        </Field>
        <Field label="Phone Number *" error={errors.phone?.message}>
          <input {...register('phone')} placeholder="+91 98765 43210" className={inputCls} />
        </Field>
        <Field label="Company / Organisation" className="sm:col-span-2">
          <input {...register('company')} placeholder="Optional" className={inputCls} />
        </Field>
      </div>
      <NextBtn />
    </form>
  );
}

function Step2({ onNext, onBack }: { onNext: (d: { gerberUploaded: boolean; cadUploaded: boolean; testPointsUploaded: boolean }) => void; onBack: () => void }) {
  const [gerber, setGerber] = useState(false);
  const [cad, setCad] = useState(false);
  const [tpl, setTpl] = useState(false);
  return (
    <div className="space-y-6">
      <InfoBox>
        To begin your ICT/FCT fixture project, Elcomech Systems requires the following materials. Please confirm and upload what you have available, our team will follow up for anything outstanding.
      </InfoBox>
      <div className="space-y-4">
        <RequirementRow
          number="1"
          label="1 Assembled PCB + 1 Empty PCB"
          sublabel="Physical samples are required for fixture calibration."
          checked={false}
          type="confirm"
        />
        <RequirementRow
          number="2"
          label="Gerber Data"
          sublabel="Standard Gerber files for your PCB layout."
          checked={gerber}
          type="upload"
          onChange={setGerber}
        />
        <RequirementRow
          number="3"
          label="CAD Data (e.g. ODB++)"
          sublabel="ODB++ or equivalent CAD export recommended."
          checked={cad}
          type="upload"
          onChange={setCad}
        />
        <RequirementRow
          number="4"
          label="Test Points List with X,Y Coordinates"
          sublabel="Including test point numbers for all probes."
          checked={tpl}
          type="upload"
          onChange={setTpl}
        />
      </div>
      <NavBtns onBack={onBack} onNext={() => onNext({ gerberUploaded: gerber, cadUploaded: cad, testPointsUploaded: tpl })} />
    </div>
  );
}

function Step3({ onNext, onBack }: { onNext: (d: z.infer<typeof step3Schema>) => void; onBack: () => void }) {
  const { register, handleSubmit } = useForm<z.infer<typeof step3Schema>>({ resolver: zodResolver(step3Schema) });
  const rows: { key: keyof z.infer<typeof step3Schema>; label: string }[] = [
    { key: 'bottom100', label: 'Bottom 100 mil' },
    { key: 'bottom75',  label: 'Bottom 75 mil' },
    { key: 'bottom50',  label: 'Bottom 50 mil' },
    { key: 'top100',    label: 'Top 100 mil' },
    { key: 'top75',     label: 'Top 75 mil' },
    { key: 'top50',     label: 'Top 50 mil' },
  ];
  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-5">
      <InfoBox>Enter the number of test points for each probe diameter on each board side. Leave blank if not applicable.</InfoBox>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {rows.map((row) => (
          <Field key={row.key} label={`${row.label}: No. of probes`}>
            <input
              {...register(row.key)}
              type="number"
              min="0"
              placeholder="0"
              className={inputCls}
            />
          </Field>
        ))}
      </div>
      <NavBtns onBack={onBack} />
    </form>
  );
}

function Step4({ onNext, onBack }: { onNext: (d: z.infer<typeof step4Schema>) => void; onBack: () => void }) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<z.infer<typeof step4Schema>>({
    resolver: zodResolver(step4Schema),
    defaultValues: { wiringNeeded: 'no', cableType: 'awg26' },
  });
  const wiring = watch('wiringNeeded');
  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-5">
      <Field label="Is wiring needed? *" error={errors.wiringNeeded?.message}>
        <div className="flex gap-4 mt-1">
          {(['yes', 'no'] as const).map((v) => (
            <label key={v} className="flex items-center gap-2 cursor-pointer">
              <input {...register('wiringNeeded')} type="radio" value={v} className="accent-[#D40000]" />
              <span className="font-semibold capitalize">{v}</span>
            </label>
          ))}
        </div>
      </Field>
      {wiring === 'yes' && (
        <Field label="Wiring Details">
          <textarea {...register('wiringDetails')} rows={3} placeholder="Describe wiring requirements…" className={inputCls} />
        </Field>
      )}
      <Field label="Tester Type / Interface Definition">
        <input {...register('testerType')} placeholder="e.g. Agilent 3070, GenRad, custom…" className={inputCls} />
      </Field>
      <Field label="Cable Type *" error={errors.cableType?.message}>
        <div className="flex flex-wrap gap-4 mt-1">
          {([
            { v: 'awg26', l: 'AWG 26' },
            { v: 'awg30', l: 'AWG 30' },
            { v: 'both',  l: 'Both' },
            { v: 'others',l: 'Others' },
          ] as const).map(({ v, l }) => (
            <label key={v} className="flex items-center gap-2 cursor-pointer">
              <input {...register('cableType')} type="radio" value={v} className="accent-[#D40000]" />
              <span className="font-semibold">{l}</span>
            </label>
          ))}
        </div>
      </Field>
      <NavBtns onBack={onBack} />
    </form>
  );
}

function Step5({ onNext, onBack }: { onNext: (d: z.infer<typeof step5Schema>) => void; onBack: () => void }) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<z.infer<typeof step5Schema>>({
    resolver: zodResolver(step5Schema),
    defaultValues: { fixtureType: 'manual', interfaceBlocks: [] },
  });
  const fixtureType = watch('fixtureType');
  const interfacePanel = watch('interfacePanel');
  const interfaceBlockOptions = [
    '170 Pin Signal', 'High Current', 'RF', 'Optical', 'Vacuum', 'Pneumatic', 'Connectors (USB, RJ45, HDMI, etc.)',
  ];
  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-5">
      <Field label="Fixture Type *" error={errors.fixtureType?.message}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-1">
          {(['vacuum', 'pneumatic', 'manual', 'rf'] as const).map((v) => (
            <label key={v} className={`flex items-center justify-center gap-2 border-2 p-3 cursor-pointer rounded transition-colors ${fixtureType === v ? 'border-[#D40000] bg-red-50' : 'border-gray-200 hover:border-gray-400'}`}>
              <input {...register('fixtureType')} type="radio" value={v} className="sr-only" />
              <span className="font-bold uppercase text-sm">{v}</span>
            </label>
          ))}
        </div>
      </Field>
      {fixtureType === 'manual' && (
        <Field label="Manual Fixture Type">
          <div className="flex gap-4 mt-1">
            {([{ v: 'low-cost', l: 'Low-Cost' }, { v: 'standard', l: 'Standard' }] as const).map(({ v, l }) => (
              <label key={v} className="flex items-center gap-2 cursor-pointer">
                <input {...register('manualType')} type="radio" value={v} className="accent-[#D40000]" />
                <span className="font-semibold">{l}</span>
              </label>
            ))}
          </div>
        </Field>
      )}
      <Field label="Interface Panel Required?">
        <div className="flex gap-4 mt-1">
          {(['yes', 'no'] as const).map((v) => (
            <label key={v} className="flex items-center gap-2 cursor-pointer">
              <input {...register('interfacePanel')} type="radio" value={v} className="accent-[#D40000]" />
              <span className="font-semibold capitalize">{v}</span>
            </label>
          ))}
        </div>
      </Field>
      {interfacePanel === 'yes' && (
        <Field label="Interface Block Types (select all that apply)">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
            {interfaceBlockOptions.map((opt) => (
              <label key={opt} className="flex items-center gap-3 cursor-pointer">
                <input {...register('interfaceBlocks')} type="checkbox" value={opt} className="accent-[#D40000] w-4 h-4" />
                <span className="text-sm">{opt}</span>
              </label>
            ))}
          </div>
        </Field>
      )}
      <NavBtns onBack={onBack} />
    </form>
  );
}

function Step6({ onNext, onBack }: { onNext: (d: z.infer<typeof step6Schema>) => void; onBack: () => void }) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<z.infer<typeof step6Schema>>({
    resolver: zodResolver(step6Schema),
    defaultValues: { connectorSide: 'none', connectorConnect: 'none', multiPanel: 'no', extras: [] },
  });
  const connectorSide = watch('connectorSide');
  const fixtureInline = watch('connectorConnect');
  const extraOptions = ['Counter', 'Scanner', 'Switch Probes', 'Part Present Sensors'];
  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-5">
      <Field label="Additional Extras (select all that apply)">
        <div className="flex flex-wrap gap-4 mt-2">
          {extraOptions.map((opt) => (
            <label key={opt} className="flex items-center gap-2 cursor-pointer">
              <input {...register('extras')} type="checkbox" value={opt} className="accent-[#D40000] w-4 h-4" />
              <span className="text-sm font-medium">{opt}</span>
            </label>
          ))}
        </div>
      </Field>
      <Field label="Connector Testing Side" error={errors.connectorSide?.message}>
        <div className="flex flex-wrap gap-4 mt-1">
          {(['none', 'top', 'bottom', 'side'] as const).map((v) => (
            <label key={v} className="flex items-center gap-2 cursor-pointer">
              <input {...register('connectorSide')} type="radio" value={v} className="accent-[#D40000]" />
              <span className="font-semibold capitalize">{v === 'none' ? 'No Connector' : v}</span>
            </label>
          ))}
        </div>
      </Field>
      {connectorSide !== 'none' && (
        <Field label="How to connect connector?">
          <div className="flex gap-4 mt-1">
            {(['manual', 'pneumatic'] as const).map((v) => (
              <label key={v} className="flex items-center gap-2 cursor-pointer">
                <input {...register('connectorConnect')} type="radio" value={v} className="accent-[#D40000]" />
                <span className="font-semibold capitalize">{v === 'manual' ? 'Manually with Fixture' : 'Pneumatic'}</span>
              </label>
            ))}
          </div>
        </Field>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="PCB Orientation Notes">
          <input {...register('pcbOrientation')} placeholder="e.g. component side up, connector facing right" className={inputCls} />
        </Field>
        <Field label="Vacuum Pressure at Site (bar)">
          <input {...register('vacuumPressure')} type="number" step="0.1" placeholder="e.g. 4.5" className={inputCls} />
        </Field>
      </div>
      <Field label="Is the PCB a multi-panel?">
        <div className="flex gap-4 mt-1">
          {(['yes', 'no'] as const).map((v) => (
            <label key={v} className="flex items-center gap-2 cursor-pointer">
              <input {...register('multiPanel')} type="radio" value={v} className="accent-[#D40000]" />
              <span className="font-semibold capitalize">{v}</span>
            </label>
          ))}
        </div>
      </Field>
      <NavBtns onBack={onBack} />
    </form>
  );
}

function Step7Review({ data, onBack, onSubmit }: { data: Partial<FormData>; onBack: () => void; onSubmit: () => void }) {
  const rows: [string, string][] = [
    ['Customer', data.step1?.customerName || '-'],
    ['Project', data.step1?.projectName || '-'],
    ['Email', data.step1?.email || '-'],
    ['Phone', data.step1?.phone || '-'],
    ['Company', data.step1?.company || '-'],
    ['Gerber Data', data.gerberUploaded ? 'Uploaded' : 'Pending'],
    ['CAD Data', data.cadUploaded ? 'Uploaded' : 'Pending'],
    ['Test Points File', data.testPointsUploaded ? 'Uploaded' : 'Pending'],
    ['Fixture Type', data.step5?.fixtureType || '-'],
    ['Cable Type', data.step4?.cableType || '-'],
    ['Wiring Needed', data.step4?.wiringNeeded || '-'],
    ['Connector Side', data.step6?.connectorSide || '-'],
    ['Extras', (data.step6?.extras || []).join(', ') || 'None'],
  ];
  return (
    <div className="space-y-6">
      <InfoBox>Please review your submission details. Our engineering team will contact you within 2 business days to confirm receipt and discuss next steps.</InfoBox>
      <div className="border border-gray-200 divide-y divide-gray-100 rounded">
        {rows.map(([k, v]) => (
          <div key={k} className="grid grid-cols-2 px-4 py-3 text-sm">
            <span className="text-gray-500 font-medium">{k}</span>
            <span className="text-black font-semibold truncate">{v}</span>
          </div>
        ))}
      </div>
      <NavBtns onBack={onBack} finalLabel="Submit Enquiry" onNext={onSubmit} />
    </div>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function Field({ label, error, children, className }: { label: string; error?: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex flex-col gap-1 ${className || ''}`}>
      <label className="text-sm font-semibold text-gray-700">{label}</label>
      {children}
      {error && <p className="text-xs text-[#D40000]">{error}</p>}
    </div>
  );
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-50 border-l-4 border-[#D40000] p-4 text-sm text-gray-600 leading-relaxed">
      {children}
    </div>
  );
}

function RequirementRow({ number, label, sublabel, checked, type, onChange }: {
  number: string; label: string; sublabel: string; checked: boolean; type: 'confirm' | 'upload'; onChange?: (v: boolean) => void;
}) {
  return (
    <div className={`flex items-start gap-4 p-4 border rounded transition-colors ${checked ? 'border-[#D40000] bg-red-50' : 'border-gray-200'}`}>
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">{number}</div>
      <div className="flex-grow">
        <p className="font-semibold text-black">{label}</p>
        <p className="text-xs text-gray-500 mt-0.5">{sublabel}</p>
      </div>
      {type === 'upload' && onChange && (
        <button
          type="button"
          onClick={() => onChange(!checked)}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase border-2 transition-all ${
            checked ? 'border-[#D40000] bg-[#D40000] text-white' : 'border-gray-300 text-gray-600 hover:border-[#D40000]'
          }`}
        >
          {checked ? <CheckCircle2 size={14} /> : <Upload size={14} />}
          {checked ? 'Marked' : 'Mark Ready'}
        </button>
      )}
      {type === 'confirm' && (
        <span className="flex items-center gap-1 text-xs text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded">
          Physical Sample
        </span>
      )}
    </div>
  );
}

function NextBtn({ label = 'Next Step' }: { label?: string }) {
  return (
    <div className="flex justify-end pt-2">
      <button type="submit" className="flex items-center gap-2 bg-[#D40000] text-white px-8 py-3 font-bold uppercase tracking-wide text-sm hover:bg-[#B30000] transition-colors">
        {label} <ChevronRight size={16} />
      </button>
    </div>
  );
}

function NavBtns({ onBack, onNext, finalLabel }: { onBack: () => void; onNext?: () => void; finalLabel?: string }) {
  return (
    <div className="flex justify-between pt-2">
      <button type="button" onClick={onBack} className="flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-6 py-3 font-bold uppercase tracking-wide text-sm hover:border-black transition-colors">
        <ChevronLeft size={16} /> Back
      </button>
      {onNext ? (
        <button type="button" onClick={onNext} className="flex items-center gap-2 bg-[#D40000] text-white px-8 py-3 font-bold uppercase tracking-wide text-sm hover:bg-[#B30000] transition-colors">
          {finalLabel || 'Next Step'} <ChevronRight size={16} />
        </button>
      ) : (
        <button type="submit" className="flex items-center gap-2 bg-[#D40000] text-white px-8 py-3 font-bold uppercase tracking-wide text-sm hover:bg-[#B30000] transition-colors">
          Next Step <ChevronRight size={16} />
        </button>
      )}
    </div>
  );
}

const inputCls = 'w-full border-2 border-gray-200 px-4 py-3 text-sm font-medium focus:outline-none focus:border-[#D40000] transition-colors rounded-none bg-white';

// ─── Main Wizard Component ────────────────────────────────────────────────────

export default function FixtureWizard({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const save = (chunk: Partial<FormData>) => setFormData((d) => ({ ...d, ...chunk }));

  const progress = ((step - 1) / (TOTAL_STEPS - 1)) * 100;

  if (submitted) {
    return (
      <div className="text-center py-12 px-4">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 300 }}>
          <CheckCircle2 size={64} className="text-[#D40000] mx-auto mb-6" />
        </motion.div>
        <h3 className="text-2xl font-bold text-black mb-3">Enquiry Submitted!</h3>
        <p className="text-gray-600 mb-2">Thank you, <strong>{formData.step1?.customerName}</strong>.</p>
        <p className="text-gray-600 mb-8">Our engineering team will review your fixture requirements and contact you at <strong>{formData.step1?.email}</strong> within 2 business days.</p>
        <p className="text-sm text-gray-500 mb-8 font-mono">Reference: ELCO-{Date.now().toString(36).toUpperCase()}</p>
        <button onClick={onClose} className="bg-black text-white px-8 py-3 font-bold uppercase tracking-wide hover:bg-[#D40000] transition-colors">
          Close
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white max-w-3xl mx-auto w-full">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
        <div>
          <p className="text-xs font-mono text-[#D40000] uppercase tracking-widest mb-1">ICT / FCT Fixture Project</p>
          <h3 className="text-xl font-bold text-black">{stepTitles[step - 1]}</h3>
        </div>
        <button onClick={onClose} className="p-2 text-gray-400 hover:text-black transition-colors" aria-label="Close">
          <X size={20} />
        </button>
      </div>

      {/* Progress */}
      <div className="px-6 pt-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-mono text-gray-500 uppercase tracking-wide">Step {step} of {TOTAL_STEPS}</p>
          <p className="text-xs font-mono text-gray-500">{Math.round(progress)}% complete</p>
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[#D40000] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
        {/* Step pills */}
        <div className="flex gap-1 mt-3 overflow-x-auto pb-1">
          {stepTitles.map((title, i) => (
            <div
              key={i}
              className={`flex-shrink-0 flex items-center gap-1 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide transition-colors ${
                i + 1 === step
                  ? 'bg-[#D40000] text-white'
                  : i + 1 < step
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-400'
              }`}
            >
              <span>{i + 1}</span>
              <span className="hidden sm:block">{title.split(' ')[0]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="px-6 py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            {step === 1 && (
              <Step1
                onNext={(d) => { save({ step1: d }); setStep(2); }}
              />
            )}
            {step === 2 && (
              <Step2
                onNext={(d) => { save(d); setStep(3); }}
                onBack={() => setStep(1)}
              />
            )}
            {step === 3 && (
              <Step3
                onNext={(d) => { save({ step3: d }); setStep(4); }}
                onBack={() => setStep(2)}
              />
            )}
            {step === 4 && (
              <Step4
                onNext={(d) => { save({ step4: d }); setStep(5); }}
                onBack={() => setStep(3)}
              />
            )}
            {step === 5 && (
              <Step5
                onNext={(d) => { save({ step5: d }); setStep(6); }}
                onBack={() => setStep(4)}
              />
            )}
            {step === 6 && (
              <Step6
                onNext={(d) => { save({ step6: d }); setStep(7); }}
                onBack={() => setStep(5)}
              />
            )}
            {step === 7 && (
              <Step7Review
                data={formData}
                onBack={() => setStep(6)}
                onSubmit={() => setSubmitted(true)}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
