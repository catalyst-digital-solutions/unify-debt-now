import { useState } from 'react';
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { ShaderAnimation } from '@/components/ShaderAnimation';

const DebtConsolidation = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Will applying for a debt consolidation loan hurt my credit score?",
      answer: "Checking your rates through our platform uses a soft credit check, which does NOT hurt your credit score. You can compare offers from 100+ lenders with zero credit impact. When you formally accept a loan, the lender will perform a hard credit inquiry, which may temporarily lower your score by a few points. However, consolidating debt and making on-time payments will improve your credit score over time by lowering your credit utilization ratio (which is 30% of your score)."
    },
    {
      question: "How much can I actually save by consolidating my debt?",
      answer: "Savings vary based on your current interest rates, loan amount, and credit score. On average, borrowers save $200-$500/month and $6,000-$15,000 over the life of the loan. If you're paying 20-25% APR on credit cards and consolidate to 8-12% APR, you'll save thousands in interest. For example, consolidating $20,000 in credit card debt from 22% to 9% APR over 5 years saves you about $26,000 in interest."
    },
    {
      question: "What's the difference between debt consolidation and debt settlement?",
      answer: "Debt consolidation means taking out ONE new loan to pay off multiple debts. You still pay back 100% of what you owe, but at a lower interest rate. Debt settlement means negotiating with creditors to pay less than you owe (typically 40-60%). Consolidation is better for your credit score and works if you can afford payments. Settlement is for severe financial hardship and damages your credit significantly."
    },
    {
      question: "Can I consolidate debt if I have bad credit?",
      answer: "Yes, but your options and interest rates will be more limited. Lenders who work with borrowers in the 580-650 credit range typically offer rates of 18-28% APR. While this may not be lower than your current credit card rates, consolidation still simplifies payments to just one monthly bill with a fixed payoff date. If your credit is below 580, you may want to consider debt relief/settlement programs instead."
    },
    {
      question: "Do I have to close my credit cards after consolidating?",
      answer: "No, and we actually recommend keeping them open (but not using them). Closing credit cards reduces your available credit, which can hurt your credit utilization ratio and lower your score. The best strategy: keep cards open with $0 balances, which shows low utilization and long credit history. Just don't rack up new debt after consolidating."
    },
    {
      question: "How long does it take to get funded?",
      answer: "After you're approved and accept a loan offer, most lenders disburse funds within 1-2 business days. Some lenders offer same-day or next-day funding. The total timeline from application to receiving money is typically 2-5 business days. Once you receive the funds, you use them to immediately pay off your existing debts."
    },
    {
      question: "Are there fees for debt consolidation loans?",
      answer: "Our comparison platform is 100% free. Individual lenders may charge: (1) loan origination fees (0-8% of loan amount, typically 1-5%), (2) late payment fees if you miss a payment, (3) prepayment penalties (rare, but some lenders charge if you pay off early). All fees are disclosed before you accept any loan. Many lenders have $0 origination fees."
    },
    {
      question: "Can I include all types of debt in a consolidation loan?",
      answer: "You can consolidate most UNSECURED debts: credit cards, medical bills, personal loans, payday loans, store cards, and collections. You CANNOT consolidate SECURED debts like mortgages, auto loans, federal student loans, or tax debt. Business debt should be handled separately with business consolidation loans."
    },
    {
      question: "What happens if I miss a payment on my consolidation loan?",
      answer: "Missing a payment will: (1) result in a late fee from your lender, (2) potentially trigger a higher penalty interest rate, (3) damage your credit score, and (4) restart the clock on rebuilding your credit. If you're having trouble making payments, contact your lender immediately—many offer hardship programs, payment deferrals, or modified payment plans."
    },
    {
      question: "Can I pay off my consolidation loan early?",
      answer: "Most lenders allow early payoff without penalty, which saves you interest. However, some lenders charge a prepayment penalty (typically 1-2% of remaining balance). This will be disclosed in your loan agreement. Paying off early is almost always financially beneficial even if there's a small penalty, because you save more in interest than the penalty costs."
    }
  ];

  const handleCTA = () => {
    window.open('https://track.supermoney.com/aff_c?offer_id=1634&aff_id=2815&utm_source=mesa&utm_medium=website&utm_campaign=debt_consolidation', '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="min-h-screen bg-white">
      
      {/* SECTION 1: HERO WITH SHADER ANIMATION */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Shader Animation Background */}
        <div className="absolute inset-0 z-0">
          <ShaderAnimation />
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white text-center">
            Debt Consolidation
          </h1>
        </div>
      </section>

      {/* SECTION 2: MAIN HERO CONTENT */}
      <section className="bg-gradient-to-b from-mgc-yellow via-mgc-cream to-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* LEFT COLUMN - Content */}
            <div>
              {/* Eyebrow */}
              <p className="text-sm uppercase tracking-wide text-mgc-dark-gray mb-4 font-semibold">
                Debt Consolidation Loans
              </p>
              
              {/* H2 Headline */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-mgc-dark-gray mb-6 leading-tight">
                Stop Juggling Bills. One Loan. One Payment.
              </h2>
              
              {/* Subheadline */}
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                Combine credit cards, medical bills, and personal loans into one affordable monthly payment with a lower interest rate. Compare offers from 100+ lenders in minutes.
              </p>
              
              {/* Value Props Quick List */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-800"><strong>Soft credit check only</strong> – won't hurt your score</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-800"><strong>Save $200-$500/month</strong> on average</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-800"><strong>Compare 100+ lenders</strong> with one application</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-800"><strong>Rates as low as 5.99% APR</strong> vs 25%+ on credit cards</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-800"><strong>Get funded in 1-2 business days</strong></span>
                </li>
              </ul>
              
              {/* Primary CTA */}
              <button 
                onClick={handleCTA}
                className="bg-mgc-gold hover:bg-mgc-yellow text-white hover:text-mgc-dark-gray text-lg font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition duration-200 w-full md:w-auto flex items-center justify-center gap-2 group"
              >
                See My Loan Options
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="text-sm text-gray-600 mt-4">
                Free comparison. No credit score impact. Get offers in 2 minutes.
              </p>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🔒</span>
                  <span className="text-sm font-medium text-mgc-dark-gray">Bank-Level Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  <span className="text-sm font-medium text-mgc-dark-gray">2-Minute Application</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">💰</span>
                  <span className="text-sm font-medium text-mgc-dark-gray">Avg $6,000+ Saved</span>
                </div>
              </div>
            </div>
            
            {/* RIGHT COLUMN - Visual */}
            <div className="hidden md:block">
              <div className="bg-white rounded-lg shadow-2xl p-6 border-2 border-mgc-gold">
                <h3 className="text-lg font-bold text-mgc-dark-gray mb-4 text-center">
                  Before vs After Consolidation
                </h3>
                
                {/* BEFORE */}
                <div className="mb-6">
                  <div className="text-sm font-semibold text-gray-600 mb-3 flex items-center justify-between">
                    <span>BEFORE: Multiple Bills</span>
                    <span className="text-red-600">😰</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm bg-red-50 p-2 rounded border border-red-200">
                      <span>Credit Card 1 (22% APR):</span>
                      <span className="font-semibold text-red-600">$185/mo</span>
                    </div>
                    <div className="flex justify-between text-sm bg-red-50 p-2 rounded border border-red-200">
                      <span>Credit Card 2 (24% APR):</span>
                      <span className="font-semibold text-red-600">$142/mo</span>
                    </div>
                    <div className="flex justify-between text-sm bg-red-50 p-2 rounded border border-red-200">
                      <span>Medical Bill (0% but stressful):</span>
                      <span className="font-semibold text-red-600">$95/mo</span>
                    </div>
                    <div className="flex justify-between text-sm bg-red-50 p-2 rounded border border-red-200">
                      <span>Personal Loan (18% APR):</span>
                      <span className="font-semibold text-red-600">$128/mo</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t-2 border-red-300 font-bold text-red-600">
                      <span>TOTAL MONTHLY:</span>
                      <span>$550/mo</span>
                    </div>
                    <div className="text-xs text-gray-600 text-center">4 payments • High stress • Avg 21% APR</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center my-4">
                  <div className="text-4xl text-green-500">↓</div>
                </div>
                
                {/* AFTER */}
                <div>
                  <div className="text-sm font-semibold text-gray-600 mb-3 flex items-center justify-between">
                    <span>AFTER: One Simple Payment</span>
                    <span className="text-green-600">😌</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm bg-green-50 p-4 rounded border-2 border-green-500">
                      <div>
                        <div className="font-semibold text-mgc-dark-gray">Consolidated Loan (8% APR)</div>
                        <div className="text-xs text-gray-600 mt-1">$20,000 • 5 years</div>
                      </div>
                      <div className="font-bold text-green-600 text-xl">$406/mo</div>
                    </div>
                    <div className="flex justify-between pt-2 border-t-2 border-gray-200 text-sm">
                      <span className="text-gray-700">Monthly Savings:</span>
                      <span className="font-bold text-green-600">+$144/mo</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Total Interest Saved:</span>
                      <span className="font-bold text-green-600">~$8,500</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-center text-xs text-gray-600 mt-4 italic">
                  Example calculation. Your savings may vary.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* SECTION 3: WHEN TO CONSOLIDATE */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-mgc-dark-gray mb-4 text-center">
            When Should You Consolidate Your Debt?
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Debt consolidation makes sense in these common situations. If any apply to you, you could save money and reduce stress.
          </p>
          
          {/* 5 Scenarios Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            
            {/* Scenario 1: Multiple Bills */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-6 text-center shadow-md border-2 border-red-200">
              <div className="text-5xl mb-4">📝</div>
              <h3 className="text-lg font-bold text-mgc-dark-gray mb-3">
                Juggling Multiple Bills
              </h3>
              <p className="text-sm text-gray-700">
                Tired of tracking 5+ different due dates, payments, and creditors every month? Simplify to one payment.
              </p>
            </div>
            
            {/* Scenario 2: High Interest */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-6 text-center shadow-md border-2 border-orange-200">
              <div className="text-5xl mb-4">🔥</div>
              <h3 className="text-lg font-bold text-mgc-dark-gray mb-3">
                Paying 20%+ Interest
              </h3>
              <p className="text-sm text-gray-700">
                Credit card APRs often exceed 20-25%. Consolidating to 6-12% APR can save thousands in interest.
              </p>
            </div>
            
            {/* Scenario 3: Only Paying Minimums */}
            <div className="bg-gradient-to-br from-yellow-50 to-green-50 rounded-lg p-6 text-center shadow-md border-2 border-yellow-200">
              <div className="text-5xl mb-4">🐌</div>
              <h3 className="text-lg font-bold text-mgc-dark-gray mb-3">
                Minimum Payments Forever
              </h3>
              <p className="text-sm text-gray-700">
                Making minimum payments keeps you in debt for decades. A fixed personal loan gets you debt-free faster.
              </p>
            </div>
            
            {/* Scenario 4: Debt Spiral */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 text-center shadow-md border-2 border-blue-200">
              <div className="text-5xl mb-4">🌀</div>
              <h3 className="text-lg font-bold text-mgc-dark-gray mb-3">
                Debt Keeps Growing
              </h3>
              <p className="text-sm text-gray-700">
                If your debt is increasing month over month despite payments, consolidation can break the cycle.
              </p>
            </div>
            
            {/* Scenario 5: Improve Credit */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 text-center shadow-md border-2 border-purple-200">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-lg font-bold text-mgc-dark-gray mb-3">
                Want to Build Credit
              </h3>
              <p className="text-sm text-gray-700">
                Consolidating lowers your credit utilization and on-time loan payments boost your credit score over time.
              </p>
            </div>
            
          </div>
          
          {/* Debt Types You Can Consolidate */}
          <div className="bg-mgc-cream rounded-lg p-8 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-mgc-dark-gray mb-6 text-center">
              What Types of Debt Can You Consolidate?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-mgc-dark-gray mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  YES - Can Be Consolidated:
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span>Credit card debt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span>Medical bills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span>Personal loans</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span>Store credit cards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span>Payday loans</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span>Collections accounts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span>Private student loans (in some cases)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-mgc-dark-gray mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  NO - Cannot Be Consolidated:
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span>Mortgage loans</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span>Auto loans</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span>Federal student loans</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span>Business loans (use business consolidation)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span>IRS tax debt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span>Child support/alimony</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-center text-sm text-gray-700 mt-6 font-medium">
              Focus on consolidating <strong>unsecured, high-interest debt</strong> for maximum savings.
            </p>
          </div>
          
        </div>
      </section>

      {/* SECTION 3: HOW IT WORKS */}
      <section className="bg-mgc-tan py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-mgc-dark-gray mb-4 text-center">
            How Debt Consolidation Works
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Get one affordable monthly payment and lower your interest rate in 4 simple steps.
          </p>
          
          {/* 4-Step Process */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Step 1 */}
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-mgc-gold text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-lg font-semibold text-mgc-dark-gray mb-3">
                Tell Us About Your Debt
              </h3>
              <p className="text-sm text-gray-700">
                Enter how much you owe, current interest rates, and monthly payments. Takes under 2 minutes.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-mgc-gold text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-lg font-semibold text-mgc-dark-gray mb-3">
                Get Competing Offers
              </h3>
              <p className="text-sm text-gray-700">
                100+ lenders compete for your business. We use a soft credit check that won't impact your score.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-mgc-gold text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-lg font-semibold text-mgc-dark-gray mb-3">
                Choose Your Best Offer
              </h3>
              <p className="text-sm text-gray-700">
                Compare rates, terms, and monthly payments side-by-side. Pick the loan that saves you the most money.
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-mgc-gold text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-lg font-semibold text-mgc-dark-gray mb-3">
                Get Funded & Be Debt-Free Faster
              </h3>
              <p className="text-sm text-gray-700">
                Funds arrive in 1-2 days. Use the money to pay off all your debts. Now you have just one easy payment.
              </p>
            </div>
            
          </div>
          
          {/* Timeline Callout */}
          <div className="bg-white rounded-lg p-8 mt-12 max-w-4xl mx-auto text-center">
            <h4 className="text-2xl font-bold text-mgc-dark-gray mb-4">Typical Timeline</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-4xl font-bold text-mgc-gold mb-2">2 min</div>
                <div className="text-gray-700 text-sm">Complete application</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-mgc-gold mb-2">Instant</div>
                <div className="text-gray-700 text-sm">Get personalized offers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-mgc-gold mb-2">1-2 days</div>
                <div className="text-gray-700 text-sm">Receive funds in your account</div>
              </div>
            </div>
            <p className="text-gray-600 mt-6 text-sm">
              Once funded, you use the loan to pay off all your existing debts. Then you're left with just one simple monthly payment.
            </p>
          </div>
          
        </div>
      </section>

      {/* SECTION 4: BENEFITS COMPARISON */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-mgc-dark-gray mb-4 text-center">
            Why Debt Consolidation Works
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            See how consolidating your debt simplifies your finances and saves you money.
          </p>
          
          {/* Visual Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            
            {/* WITHOUT Consolidation */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-8 border-2 border-red-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-mgc-dark-gray">Without Consolidation</h3>
                <span className="text-3xl">😰</span>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-mgc-dark-gray">Multiple Due Dates</div>
                    <div className="text-sm text-gray-600">Miss one and face late fees, penalty APR increases</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-mgc-dark-gray">High Interest Rates (20-25%)</div>
                    <div className="text-sm text-gray-600">Paying $1,000s in interest to credit card companies</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-mgc-dark-gray">Financial Stress</div>
                    <div className="text-sm text-gray-600">Constantly worried about which bill to pay first</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-mgc-dark-gray">High Credit Utilization</div>
                    <div className="text-sm text-gray-600">Maxed-out cards hurt your credit score (30% of score)</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-mgc-dark-gray">Minimum Payment Trap</div>
                    <div className="text-sm text-gray-600">Takes 20+ years to pay off, mostly interest</div>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* WITH Consolidation */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-8 border-2 border-green-500">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-mgc-dark-gray">With Consolidation</h3>
                <span className="text-3xl">😌</span>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-mgc-dark-gray">One Simple Payment</div>
                    <div className="text-sm text-gray-600">Same date every month. Set it and forget it with autopay</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-mgc-dark-gray">Lower Interest Rate (6-12%)</div>
                    <div className="text-sm text-gray-600">Save $6,000-$12,000+ in interest over loan term</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-mgc-dark-gray">Peace of Mind</div>
                    <div className="text-sm text-gray-600">Clear debt-free date. Know exactly when you'll be done</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-mgc-dark-gray">Improved Credit Score</div>
                    <div className="text-sm text-gray-600">Lowers credit utilization, builds positive payment history</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-mgc-dark-gray">Fixed Payoff Timeline</div>
                    <div className="text-sm text-gray-600">Debt-free in 2-5 years with structured payments</div>
                  </div>
                </li>
              </ul>
            </div>
            
          </div>
          
          {/* Real Example */}
          <div className="bg-mgc-cream rounded-lg p-8 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-mgc-dark-gray mb-6 text-center">
              Real Example: How Much Can You Save?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-mgc-dark-gray mb-4">Current Situation</h4>
                <div className="space-y-2 text-sm text-gray-700 mb-4">
                  <div className="flex justify-between">
                    <span>Total Debt:</span>
                    <span className="font-semibold">$25,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average APR:</span>
                    <span className="font-semibold">22%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Payment:</span>
                    <span className="font-semibold">$625</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-200">
                    <span>Time to Payoff:</span>
                    <span className="font-bold text-red-600">18 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Interest Paid:</span>
                    <span className="font-bold text-red-600">$110,500</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 italic">Paying minimum payments on credit cards</p>
              </div>
              <div className="bg-white rounded-lg p-6 border-2 border-green-500">
                <h4 className="font-semibold text-mgc-dark-gray mb-4">After Consolidation</h4>
                <div className="space-y-2 text-sm text-gray-700 mb-4">
                  <div className="flex justify-between">
                    <span>Total Debt:</span>
                    <span className="font-semibold">$25,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>New Fixed APR:</span>
                    <span className="font-semibold text-green-600">8.5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>New Monthly Payment:</span>
                    <span className="font-semibold">$515</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-200">
                    <span>Time to Payoff:</span>
                    <span className="font-bold text-green-600">5 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Interest Paid:</span>
                    <span className="font-bold text-green-600">$5,900</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 italic">With 5-year consolidation loan</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 mt-6 text-center">
              <div className="text-3xl font-bold text-mgc-gold mb-2">You Save $104,600</div>
              <div className="text-gray-700">Become debt-free 13 years sooner + save $104,600 in interest</div>
            </div>
          </div>
          
        </div>
      </section>

      {/* SECTION 5: RATE & SAVINGS BY CREDIT SCORE */}
      <section className="bg-mgc-tan py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-mgc-dark-gray mb-4 text-center">
            What Interest Rate Can I Get?
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Your consolidation loan rate depends primarily on your credit score. Here's what to expect:
          </p>
          
          {/* Credit Score Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
            
            {/* Excellent Credit */}
            <div className="bg-white rounded-lg p-6 text-center shadow-md border-2 border-green-500">
              <div className="text-3xl mb-3">⭐⭐⭐</div>
              <h3 className="text-lg font-bold text-mgc-dark-gray mb-2">Excellent</h3>
              <div className="text-2xl font-bold text-green-600 mb-2">5.99%-8.99%</div>
              <div className="text-sm text-gray-600 mb-3">Credit: 740+</div>
              <p className="text-xs text-gray-600">
                Best rates. Maximum savings vs credit cards.
              </p>
            </div>
            
            {/* Good Credit */}
            <div className="bg-white rounded-lg p-6 text-center shadow-md border-2 border-blue-500">
              <div className="text-3xl mb-3">⭐⭐</div>
              <h3 className="text-lg font-bold text-mgc-dark-gray mb-2">Good</h3>
              <div className="text-2xl font-bold text-blue-600 mb-2">9%-13.99%</div>
              <div className="text-sm text-gray-600 mb-3">Credit: 670-739</div>
              <p className="text-xs text-gray-600">
                Great rates. Still save big vs credit cards.
              </p>
            </div>
            
            {/* Fair Credit */}
            <div className="bg-white rounded-lg p-6 text-center shadow-md border-2 border-yellow-500">
              <div className="text-3xl mb-3">⭐</div>
              <h3 className="text-lg font-bold text-mgc-dark-gray mb-2">Fair</h3>
              <div className="text-2xl font-bold text-yellow-600 mb-2">14%-19.99%</div>
              <div className="text-sm text-gray-600 mb-3">Credit: 620-669</div>
              <p className="text-xs text-gray-600">
                Moderate rates. Still better than most cards.
              </p>
            </div>
            
            {/* Poor Credit */}
            <div className="bg-white rounded-lg p-6 text-center shadow-md border-2 border-orange-500">
              <div className="text-3xl mb-3">⚠️</div>
              <h3 className="text-lg font-bold text-mgc-dark-gray mb-2">Poor</h3>
              <div className="text-2xl font-bold text-orange-600 mb-2">20%-25%</div>
              <div className="text-sm text-gray-600 mb-3">Credit: 580-619</div>
              <p className="text-xs text-gray-600">
                Higher rates but fixed payment helps.
              </p>
            </div>
            
            {/* Bad Credit */}
            <div className="bg-white rounded-lg p-6 text-center shadow-md border-2 border-red-500">
              <div className="text-3xl mb-3">❌</div>
              <h3 className="text-lg font-bold text-mgc-dark-gray mb-2">Bad</h3>
              <div className="text-2xl font-bold text-red-600 mb-2">26%-35%</div>
              <div className="text-sm text-gray-600 mb-3">Credit: Below 580</div>
              <p className="text-xs text-gray-600">
                Limited options. Consider debt relief instead.
              </p>
            </div>
            
          </div>
          
          {/* Savings Examples */}
          <div className="bg-white rounded-lg p-8 border-2 border-mgc-gold">
            <h3 className="text-2xl font-bold text-mgc-dark-gray mb-4 text-center">
              Your Potential Monthly Savings
            </h3>
            <p className="text-gray-700 mb-6 text-center">
              Example: <strong>$15,000 in credit card debt at 23% APR</strong>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">$450/mo</div>
                <div className="text-sm text-gray-600 mb-2">Current Payment (minimum on cards)</div>
                <div className="text-xs text-gray-600">13 years to payoff<br/>$54,800 total paid</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">$337/mo</div>
                <div className="text-sm text-gray-600 mb-2">With 10% APR Loan (Good Credit)</div>
                <div className="text-xs text-gray-600">5 years to payoff<br/>$20,220 total paid</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">Save $113/mo</div>
                <div className="text-sm text-gray-600 mb-2">Monthly Savings</div>
                <div className="text-xs text-gray-600">That's $1,356/year!<br/>More cash flow each month</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-mgc-gold mb-2">Save $34,580</div>
                <div className="text-sm text-gray-600 mb-2">Total Interest Saved</div>
                <div className="text-xs text-gray-600">Debt-free 8 years sooner<br/>Money in your pocket</div>
              </div>
            </div>
          </div>
          
          {/* Credit Improvement Tip */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mt-8">
            <div className="flex items-start gap-3">
              <span className="text-3xl">💡</span>
              <div>
                <h4 className="font-bold text-mgc-dark-gray mb-2">Good News: We Work With All Credit Levels</h4>
                <p className="text-gray-700">
                  Even if your credit isn't perfect, our platform connects you with 100+ lenders who specialize in all credit tiers. You may not get the absolute lowest rate, but <strong>consolidation can still save you money and simplify your life</strong>. Plus, making on-time payments on your consolidation loan will help improve your credit score over time—potentially qualifying you for refinancing at an even better rate later.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* SECTION 6: REQUIREMENTS & QUALIFICATIONS */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-mgc-dark-gray mb-12 text-center">
            Debt Consolidation Loan Requirements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            
            {/* Basic Requirements */}
            <div className="bg-gradient-to-br from-mgc-cream to-mgc-tan rounded-lg p-8 border-2 border-mgc-gold">
              <h3 className="text-2xl font-bold text-mgc-dark-gray mb-4">Basic Qualifications</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-mgc-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Age:</strong> 18 years or older
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-mgc-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Citizenship:</strong> U.S. citizen or permanent resident
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-mgc-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>SSN:</strong> Valid Social Security Number
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-mgc-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Income:</strong> Steady, verifiable income (employment, self-employment, retirement, etc.)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-mgc-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Bank Account:</strong> Active checking account for fund disbursement
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-mgc-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Credit Score:</strong> Typically 580+ (some lenders accept lower)
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Lender Criteria */}
            <div className="bg-gradient-to-br from-mgc-cream to-mgc-tan rounded-lg p-8 border-2 border-mgc-gold">
              <h3 className="text-2xl font-bold text-mgc-dark-gray mb-4">Typical Lender Criteria</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-mgc-gold text-xl flex-shrink-0">•</span>
                  <div>
                    <strong>Debt Amount:</strong> Minimum $5,000-$7,500 (varies by lender)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-mgc-gold text-xl flex-shrink-0">•</span>
                  <div>
                    <strong>Maximum Loan:</strong> Up to $100,000 (based on income and credit)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-mgc-gold text-xl flex-shrink-0">•</span>
                  <div>
                    <strong>Debt-to-Income Ratio:</strong> Typically under 50-70% (including new loan)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-mgc-gold text-xl flex-shrink-0">•</span>
                  <div>
                    <strong>Payment History:</strong> No recent bankruptcies (usually within 2-4 years)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-mgc-gold text-xl flex-shrink-0">•</span>
                  <div>
                    <strong>Unsecured Debt Only:</strong> Credit cards, medical bills, personal loans (not mortgages/auto)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-mgc-gold text-xl flex-shrink-0">•</span>
                  <div>
                    <strong>Employment:</strong> Stable income for at least 3-6 months
                  </div>
                </li>
              </ul>
              <p className="text-sm text-gray-600 mt-4 italic">
                Requirements vary by lender. Our platform shows you lenders you're likely to qualify for.
              </p>
            </div>
            
          </div>
          
          {/* What You'll Need */}
          <div className="bg-mgc-cream rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-mgc-dark-gray mb-6 text-center">
              What You'll Need to Apply
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-mgc-dark-gray mb-3">Personal Information</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Full legal name</li>
                  <li>• Date of birth</li>
                  <li>• Social Security Number</li>
                  <li>• Current address (and previous if less than 2 years)</li>
                  <li>• Phone number and email</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-mgc-dark-gray mb-3">Financial Details</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Employer name and income</li>
                  <li>• List of current debts and balances</li>
                  <li>• Bank account info (for funding)</li>
                  <li>• Monthly housing payment</li>
                  <li>• Recent pay stubs or tax returns (may be required later)</li>
                </ul>
              </div>
            </div>
            <p className="text-center text-sm text-gray-600 mt-6">
              Most of this you can fill in from memory. Documentation only required if you accept a loan offer.
            </p>
          </div>
          
          {/* Important Note */}
          <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6 mt-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-mgc-dark-gray mb-2">Important: Debt-to-Income Ratio (DTI)</h4>
                <p className="text-gray-700 mb-3">
                  Your DTI is calculated by dividing your total monthly debt payments by your gross monthly income. For example, if you make $5,000/month and have $2,000 in debt payments, your DTI is 40%.
                </p>
                <p className="text-gray-700 font-medium">
                  <strong>Most lenders require a DTI under 50-70%.</strong> If yours is higher, you may need to:
                </p>
                <ul className="mt-2 space-y-1 text-gray-700 text-sm">
                  <li>• Increase your income (add co-borrower, side gig)</li>
                  <li>• Pay down some debts first before consolidating</li>
                  <li>• Consider debt relief/settlement instead (if DTI is too high)</li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* SECTION 7: FAQ ACCORDION */}
      <section className="bg-mgc-tan py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-mgc-dark-gray mb-12 text-center">
            Common Questions About Debt Consolidation
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg border-2 border-mgc-light-gray hover:border-mgc-yellow overflow-hidden transition duration-200">
                
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-mgc-cream transition duration-200"
                >
                  <h3 className="text-lg font-semibold text-mgc-dark-gray pr-8">
                    {faq.question}
                  </h3>
                  <span className="text-2xl text-mgc-gold flex-shrink-0 font-bold">
                    {openFAQ === index ? '−' : '+'}
                  </span>
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-4 pt-2">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
                
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* SECTION 8: SUCCESS STORIES */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-mgc-dark-gray mb-4 text-center">
            Real People, Real Debt Freedom
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 text-center">
            See how others took control of their finances with debt consolidation.
          </p>
          
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            
            {/* Testimonial 1 */}
            <div className="bg-mgc-cream rounded-lg p-6 shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic leading-relaxed">
                "I had $32,000 in credit card debt spread across 7 different cards. The monthly juggling act was killing me. After consolidating, I went from $780/month to $520/month—and I actually have a payoff date now instead of drowning in minimum payments forever."
              </p>
              <div className="pt-4 border-t border-yellow-300">
                <p className="font-semibold text-mgc-dark-gray">Jennifer L.</p>
                <p className="text-sm text-gray-600">Saved $260/month • Debt-free in 5 years</p>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-mgc-cream rounded-lg p-6 shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic leading-relaxed">
                "Medical bills after my surgery put me $18,000 in debt. Between that and credit cards, I was stressed every single day. Consolidating at 9.5% APR instead of 24% saved me over $11,000 in interest. I'm finally seeing light at the end of the tunnel."
              </p>
              <div className="pt-4 border-t border-yellow-300">
                <p className="font-semibold text-mgc-dark-gray">Marcus T.</p>
                <p className="text-sm text-gray-600">Saved $187/month • $11,000 interest saved</p>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-mgc-cream rounded-lg p-6 shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic leading-relaxed">
                "I thought I'd be paying credit card bills forever. The application took 3 minutes, I got 9 different loan offers, and chose the one at 7.8% APR. Two days later the money was in my account. Six months later, my credit score went UP 48 points!"
              </p>
              <div className="pt-4 border-t border-yellow-300">
                <p className="font-semibold text-mgc-dark-gray">Sarah K.</p>
                <p className="text-sm text-gray-600">7.8% APR • Credit score +48 points</p>
              </div>
            </div>
            
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-mgc-gold mb-2">$350</div>
              <div className="text-gray-700">Average monthly savings</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-mgc-gold mb-2">100+</div>
              <div className="text-gray-700">Competing lenders</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-mgc-gold mb-2">$10B+</div>
              <div className="text-gray-700">Loans funded</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-mgc-gold mb-2">4.7/5</div>
              <div className="text-gray-700">Customer rating</div>
            </div>
          </div>
          
          {/* Trust Certifications */}
          <div className="bg-mgc-tan rounded-lg p-8">
            <h3 className="text-2xl font-bold text-mgc-dark-gray mb-6 text-center">
              Your Information is Secure
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl mb-2">🔐</div>
                <div className="font-semibold text-mgc-dark-gray mb-1">256-Bit SSL Encryption</div>
                <div className="text-sm text-gray-600">Bank-level security</div>
              </div>
              <div>
                <div className="text-4xl mb-2">🛡️</div>
                <div className="font-semibold text-mgc-dark-gray mb-1">Privacy Protected</div>
                <div className="text-sm text-gray-600">We never sell your data</div>
              </div>
              <div>
                <div className="text-4xl mb-2">✅</div>
                <div className="font-semibold text-mgc-dark-gray mb-1">Licensed Lenders Only</div>
                <div className="text-sm text-gray-600">Vetted & trusted partners</div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="bg-gradient-to-r from-mgc-yellow to-mgc-gold py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className="text-3xl md:text-4xl font-bold text-mgc-dark-gray mb-4">
            Ready to Stop Juggling Bills and Start Saving Money?
          </h2>
          
          <p className="text-xl text-mgc-dark-gray mb-8">
            Compare debt consolidation offers from 100+ lenders in 2 minutes—with zero impact to your credit score.
          </p>
          
          <button 
            onClick={handleCTA}
            className="bg-white text-mgc-gold hover:bg-mgc-dark-gray hover:text-white text-xl font-bold px-10 py-5 rounded-lg shadow-2xl hover:shadow-3xl transition duration-200 inline-flex items-center gap-2 group"
          >
            See My Loan Options
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <p className="text-sm text-mgc-dark-gray mt-4 font-medium">
            Free comparison • Soft credit check only • Takes 2 minutes • No obligations
          </p>
          
          {/* Trust Elements */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
            <div className="flex items-center gap-2 text-mgc-dark-gray">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Won't Hurt Credit Score</span>
            </div>
            <div className="flex items-center gap-2 text-mgc-dark-gray">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm font-medium">100% Free to Compare</span>
            </div>
            <div className="flex items-center gap-2 text-mgc-dark-gray">
              <span className="text-xl">💰</span>
              <span className="text-sm font-medium">Save $200-$500/Month</span>
            </div>
            <div className="flex items-center gap-2 text-mgc-dark-gray">
              <span className="text-xl">⚡</span>
              <span className="text-sm font-medium">Funded in 1-2 Days</span>
            </div>
          </div>
          
          {/* Alternative Options */}
          <div className="mt-12 pt-8 border-t-2 border-mgc-dark-gray/20">
            <p className="text-mgc-dark-gray mb-3">
              Exploring other financial solutions?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/personal-loans" 
                className="text-mgc-dark-gray hover:text-white font-semibold underline"
              >
                Personal Loans
              </a>
              <span className="text-mgc-dark-gray">|</span>
              <a 
                href="/credit-repair" 
                className="text-mgc-dark-gray hover:text-white font-semibold underline"
              >
                Credit Repair
              </a>
              <span className="text-mgc-dark-gray">|</span>
              <a 
                href="/debt-relief" 
                className="text-mgc-dark-gray hover:text-white font-semibold underline"
              >
                Debt Relief (if payments unaffordable)
              </a>
            </div>
          </div>
          
        </div>
      </section>

      {/* SECTION 10: COMPLIANCE FOOTER */}
      <footer className="bg-gray-50 py-12 px-6 md:px-8 border-t-2 border-mgc-light-gray">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-sm text-gray-600 leading-relaxed space-y-4">
            
            <p>
              <strong>Affiliate Disclosure:</strong> Mesa Group Consulting is a partner with SuperMoney and may earn a commission if you complete a debt consolidation loan application through our platform, at no additional cost to you. We only recommend services we believe provide value to consumers seeking to consolidate and simplify their debt.
            </p>
            
            <p>
              <strong>Loan Comparison Disclaimer:</strong> SuperMoney is a debt consolidation loan comparison platform that connects borrowers with multiple lenders. SuperMoney is not a direct lender and does not make lending decisions. Rates, terms, and loan approval are determined by individual lenders based on your creditworthiness, income, debt-to-income ratio, and financial profile. Not all applicants will qualify for the lowest advertised rates.
            </p>
            
            <p>
              <strong>Credit Score Impact:</strong> Checking your rates through our platform uses a soft credit inquiry, which does NOT impact your credit score. If you formally accept a debt consolidation loan offer, the lender will perform a hard credit inquiry, which may temporarily affect your credit score by a few points. Successfully consolidating debt and making on-time payments will improve your credit score over time by lowering your credit utilization ratio.
            </p>
            
            <p>
              <strong>APR Range Disclosure:</strong> Advertised rates are subject to change and depend on borrower qualifications. Debt consolidation loan APRs typically range from 5.99% to 35.99% depending on credit score, income, debt-to-income ratio, and loan term. Example: A $20,000 debt consolidation loan at 9% APR for 5 years (60 months) would have monthly payments of $415 and total interest of $4,900. Your actual rate may be higher or lower.
            </p>
            
            <p>
              <strong>Lending Partners:</strong> SuperMoney partners with 100+ banks, credit unions, and online lenders. Lender availability varies by state, credit score, and borrower qualifications. Not all lenders are available in all states. Lenders may charge origination fees ranging from 0-8% of the loan amount.
            </p>
            
            <p>
              <strong>Loan Terms Disclosure:</strong> Debt consolidation loan terms typically range from 2-7 years (24-84 months). Longer terms result in lower monthly payments but higher total interest paid. Shorter terms result in higher monthly payments but lower total interest paid.
            </p>
            
            <p>
              <strong>Eligibility Requirements:</strong> Typical requirements include: US citizenship or permanent residency, age 18+, steady income, active bank account, minimum credit score 580-640 (varies by lender), debt-to-income ratio under 50-70%. Requirements vary by lender.
            </p>
            
            <p>
              <strong>Fees Disclosure:</strong> Our comparison platform is free to use. Individual lenders may charge loan origination fees (0-8% of loan amount), late payment fees, returned payment fees, or prepayment penalties (rare). All fees are disclosed before you accept a loan offer.
            </p>
            
            <p>
              <strong>Data Security:</strong> Our debt consolidation loan comparison platform uses 256-bit SSL encryption to protect your personal and financial information. We do not sell your information to third-party marketers. Information you provide is shared only with lenders you choose to apply with.
            </p>
            
            <p>
              <strong>State Availability:</strong> Debt consolidation loans are available in all 50 states, though specific lender availability varies by state. Some states have additional lending regulations that may affect loan availability or terms.
            </p>
            
          </div>
          
        </div>
      </footer>

    </main>
  );
};

export default DebtConsolidation;
