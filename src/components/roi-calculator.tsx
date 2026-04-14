"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

function formatCurrency(n: number) {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

export default function ROICalculator() {
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(25);
  const [missedInquiries, setMissedInquiries] = useState(10);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [conversionRate, setConversionRate] = useState(20);
  const [memberLTV, setMemberLTV] = useState(200);

  const annualStaffCost = hoursPerWeek * 52 * hourlyRate;
  const optimaAnnualCost = 1200 + 200 * 12; // $3,600
  const netSavings = annualStaffCost - optimaAnnualCost;
  const estimatedLeads = missedInquiries * 52 * (conversionRate / 100);
  const leadRevenue = estimatedLeads * memberLTV;
  const totalROI = ((leadRevenue - optimaAnnualCost) / optimaAnnualCost) * 100;

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-white">
          Calculate Your ROI
        </h2>
        <p className="text-lg text-text-secondary text-center mt-4">
          See how much Optima could save your gym — adjust the inputs for your
          situation.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {/* Inputs */}
          <Card className="bg-dark-card border-border-dark p-6">
            <div className="space-y-6">
              {/* Hours per week */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm text-text-secondary">
                    Hours/week staff spends answering questions
                  </label>
                  <span className="font-heading text-primary font-bold">
                    {hoursPerWeek}
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={40}
                  step={1}
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full accent-[#3B82F6]"
                />
              </div>

              {/* Hourly cost */}
              <div>
                <label className="text-sm text-text-secondary block mb-2">
                  Staff hourly cost
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">
                    $
                  </span>
                  <Input
                    type="number"
                    min={0}
                    step={1}
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="pl-7 bg-dark border-border-dark text-white"
                  />
                </div>
              </div>

              {/* Missed inquiries */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm text-text-secondary">
                    After-hours inquiries missed per week
                  </label>
                  <span className="font-heading text-primary font-bold">
                    {missedInquiries}
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={50}
                  step={1}
                  value={missedInquiries}
                  onChange={(e) => setMissedInquiries(Number(e.target.value))}
                  className="w-full accent-[#3B82F6]"
                />
              </div>

              {/* Advanced */}
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="text-sm text-primary cursor-pointer hover:underline"
              >
                {showAdvanced ? "Hide" : "Show"} advanced assumptions
              </button>

              {showAdvanced && (
                <div className="space-y-6 pt-2">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm text-text-secondary">
                        Inquiry-to-trial conversion rate
                      </label>
                      <span className="font-heading text-primary font-bold">
                        {conversionRate}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      step={1}
                      value={conversionRate}
                      onChange={(e) =>
                        setConversionRate(Number(e.target.value))
                      }
                      className="w-full accent-[#3B82F6]"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-text-secondary block mb-2">
                      Average member lifetime value
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">
                        $
                      </span>
                      <Input
                        type="number"
                        min={0}
                        step={10}
                        value={memberLTV}
                        onChange={(e) => setMemberLTV(Number(e.target.value))}
                        className="pl-7 bg-dark border-border-dark text-white"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Results */}
          <Card className="bg-dark-card border-border-dark p-6">
            <div className="space-y-0">
              <div className="py-4">
                <div className="text-sm text-text-muted uppercase tracking-wider">
                  Annual Staff Q&A Cost
                </div>
                <div className="font-heading text-2xl md:text-3xl font-bold text-white mt-1">
                  {formatCurrency(annualStaffCost)}
                </div>
              </div>

              <div className="border-t border-border-dark py-4">
                <div className="text-sm text-text-muted uppercase tracking-wider">
                  Optima Annual Cost
                </div>
                <div className="font-heading text-2xl md:text-3xl font-bold text-white mt-1">
                  $3,600/yr
                </div>
              </div>

              <div className="border-t border-border-dark py-4">
                <div className="text-sm text-text-muted uppercase tracking-wider">
                  Net Staff Savings
                </div>
                <div
                  className={`font-heading text-2xl md:text-3xl font-bold mt-1 ${
                    netSavings >= 0 ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {formatCurrency(netSavings)}
                </div>
              </div>

              <div className="border-t border-border-dark py-4">
                <div className="text-sm text-text-muted uppercase tracking-wider">
                  Estimated New Leads/Year
                </div>
                <div className="font-heading text-2xl md:text-3xl font-bold text-primary mt-1">
                  {Math.round(estimatedLeads)}
                </div>
              </div>

              <div className="border-t border-border-dark py-4">
                <div className="text-sm text-text-muted uppercase tracking-wider">
                  Lead Revenue Potential
                </div>
                <div className="font-heading text-2xl md:text-3xl font-bold text-primary mt-1">
                  {formatCurrency(leadRevenue)}
                </div>
              </div>

              <div className="border-t border-border-dark py-4">
                <div className="text-sm text-text-muted uppercase tracking-wider">
                  Total ROI
                </div>
                <div className="font-heading text-2xl md:text-3xl font-bold text-primary mt-1">
                  {totalROI.toFixed(1)}%
                </div>
              </div>

              <div className="border-t border-border-dark pt-4 mt-4">
                <p className="text-xs text-text-muted">
                  Assumes Launch plan pricing ($1,200 setup + $200/mo). Default
                  conversion rate: 20% of after-hours inquiries become trials.
                  Default member LTV: $200. Adjust these in the advanced
                  settings above.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
