'use client'

import { Navigation } from "@/components/ui/navigation"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { useState, useEffect } from "react"

export default function ROICalculator() {
  const [formData, setFormData] = useState({
    studentPopulation: 5000,
    staffCount: 200,
    currentCost: 4000000,
    efficiencyGain: 25
  })
  
  const [results, setResults] = useState<{
    annualSavings: number;
    annualSoftwareCost: number;
    implementationCost: number;
    totalInvestment: number;
    totalBenefits: number;
    roi: number;
    paybackPeriod: number;
  } | null>(null)

  // Set page title and meta description
  useEffect(() => {
    document.title = "University Management Software ROI Calculator: Measure Your Investment Returns | CampusHub"
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Calculate the return on investment for your university management software with our comprehensive ROI framework and methodology.')
    }
  }, [])

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }))
  }

  const calculateROI = () => {
    const { studentPopulation, staffCount, currentCost, efficiencyGain } = formData
    
    // Calculate annual savings based on efficiency gain
    const annualSavings = (currentCost * efficiencyGain) / 100
    
    // Estimate software costs (simplified calculation)
    const softwareCostPerStudent = 200 // ₹200 per student per year
    const softwareCostPerStaff = 500 // ₹500 per staff per year
    const annualSoftwareCost = (studentPopulation * softwareCostPerStudent) + (staffCount * softwareCostPerStaff)
    
    // Implementation costs (one-time)
    const implementationCost = annualSoftwareCost * 2 // 2 years of software cost
    
    // Total 3-year investment
    const totalInvestment = implementationCost + (annualSoftwareCost * 3)
    
    // Total 3-year benefits
    const totalBenefits = annualSavings * 3
    
    // Calculate ROI
    const roi = ((totalBenefits - totalInvestment) / totalInvestment) * 100
    const paybackPeriod = totalInvestment / annualSavings
    
    setResults({
      annualSavings,
      annualSoftwareCost,
      implementationCost,
      totalInvestment,
      totalBenefits,
      roi,
      paybackPeriod
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="blog" />

      {/* Breadcrumb */}
      <div className="pt-20 pb-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[
            { label: "Blog", href: "/blog" },
            { label: "University Management Software ROI Calculator" }
          ]} />
        </div>
      </div>

      {/* Article Header */}
      <section className="pt-8 pb-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
              ROI
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              University Management Software ROI Calculator: Measure Your Investment Returns
            </h1>
            <div className="flex items-center justify-center text-gray-600 mb-8">
              <span>January 3, 2024</span>
              <span className="mx-2">•</span>
              <span>10 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-12">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-orange-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h4 className="text-sm font-medium text-orange-800">ROI Framework</h4>
                <p className="text-sm text-orange-700 mt-1">
                  This comprehensive calculator helps you quantify the financial benefits of implementing 
                  university management software, including both direct cost savings and indirect benefits.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-relaxed prose-ul:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-900">

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding ROI in Education Technology</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Return on Investment (ROI) for university management software goes beyond simple cost savings. 
                It encompasses operational efficiency, improved student outcomes, enhanced user experience, 
                and long-term strategic benefits that contribute to institutional success.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">ROI Formula for Education Software</h3>
                <div className="bg-white p-4 rounded border-2 border-blue-200 text-center">
                  <p className="text-lg font-semibold text-gray-900 mb-2">ROI = (Total Benefits - Total Costs) / Total Costs × 100%</p>
                  <p className="text-sm text-gray-600">Where Total Benefits include both quantifiable savings and qualitative improvements</p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cost Components Analysis</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Initial Investment Costs</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-900 mb-3">Software Costs</h4>
                      <ul className="text-red-800 space-y-2">
                        <li>• License fees (per user/student)</li>
                        <li>• Setup and configuration</li>
                        <li>• Custom development</li>
                        <li>• Third-party integrations</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-900 mb-3">Implementation Costs</h4>
                      <ul className="text-red-800 space-y-2">
                        <li>• Project management</li>
                        <li>• Data migration</li>
                        <li>• Training and onboarding</li>
                        <li>• Change management</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Ongoing Operational Costs</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                      <h4 className="font-semibold text-yellow-900 mb-3">Annual Costs</h4>
                      <ul className="text-yellow-800 space-y-2">
                        <li>• Software maintenance fees</li>
                        <li>• Support and updates</li>
                        <li>• Hosting and infrastructure</li>
                        <li>• Security and compliance</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                      <h4 className="font-semibold text-yellow-900 mb-3">Staff Costs</h4>
                      <ul className="text-yellow-800 space-y-2">
                        <li>• System administration</li>
                        <li>• User support</li>
                        <li>• Ongoing training</li>
                        <li>• Customization and updates</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits Quantification Framework</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Direct Cost Savings</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-900 mb-3">Administrative Efficiency</h4>
                      <ul className="text-green-800 space-y-2">
                        <li>• Reduced manual data entry (40-60% time savings)</li>
                        <li>• Automated report generation</li>
                        <li>• Streamlined approval workflows</li>
                        <li>• Reduced paper and printing costs</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-900 mb-3">Staff Productivity</h4>
                      <ul className="text-green-800 space-y-2">
                        <li>• Faster student service delivery</li>
                        <li>• Reduced support ticket volume</li>
                        <li>• Improved data accuracy</li>
                        <li>• Enhanced decision-making speed</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Indirect Benefits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-900 mb-3">Student Experience</h4>
                      <ul className="text-blue-800 space-y-2">
                        <li>• Improved enrollment rates</li>
                        <li>• Higher student satisfaction</li>
                        <li>• Reduced dropout rates</li>
                        <li>• Enhanced academic success</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-900 mb-3">Strategic Advantages</h4>
                      <ul className="text-blue-800 space-y-2">
                        <li>• Better compliance and reporting</li>
                        <li>• Enhanced institutional reputation</li>
                        <li>• Improved data-driven decisions</li>
                        <li>• Competitive advantage</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">ROI Calculation Methodology</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 1: Calculate Annual Cost Savings</h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">₹4,00,000</div>
                        <div className="text-sm text-gray-600">Administrative Time Savings</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">₹2,00,000</div>
                        <div className="text-sm text-gray-600">Reduced Paper/Printing</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">₹1,20,000</div>
                        <div className="text-sm text-gray-600">Error Reduction</div>
                      </div>
                    </div>
                    <div className="text-center border-t pt-4">
                      <div className="text-3xl font-bold text-green-600">₹7,20,000</div>
                      <div className="text-sm text-gray-600">Total Annual Savings</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 2: Calculate Total Investment</h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Initial Investment</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Software License: ₹6,40,000</li>
                          <li>• Implementation: ₹3,20,000</li>
                          <li>• Training: ₹1,20,000</li>
                          <li>• Data Migration: ₹80,000</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Annual Costs</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Maintenance: ₹1,60,000</li>
                          <li>• Support: ₹80,000</li>
                          <li>• Hosting: ₹40,000</li>
                          <li>• Staff: ₹1,20,000</li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-center border-t pt-4">
                      <div className="text-3xl font-bold text-red-600">₹15,60,000</div>
                      <div className="text-sm text-gray-600">Total 3-Year Investment</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 3: Calculate ROI</h3>
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-600 mb-2">38.5%</div>
                      <div className="text-lg text-green-800 mb-4">3-Year ROI</div>
                      <div className="text-sm text-green-700">
                        ROI = (₹21,60,000 - ₹15,60,000) / ₹15,60,000 × 100% = 38.5%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">ROI Calculator Template</h2>
              
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Interactive ROI Calculator</h3>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Student Population</label>
                      <input 
                        type="number" 
                        value={formData.studentPopulation}
                        onChange={(e) => handleInputChange('studentPopulation', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" 
                        placeholder="5000" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Staff Count</label>
                      <input 
                        type="number" 
                        value={formData.staffCount}
                        onChange={(e) => handleInputChange('staffCount', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" 
                        placeholder="200" 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Current Annual Administrative Cost (₹)</label>
                      <input 
                        type="number" 
                        value={formData.currentCost}
                        onChange={(e) => handleInputChange('currentCost', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" 
                        placeholder="4000000" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Expected Efficiency Gain (%)</label>
                      <input 
                        type="number" 
                        value={formData.efficiencyGain}
                        onChange={(e) => handleInputChange('efficiencyGain', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" 
                        placeholder="25" 
                      />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <button 
                      onClick={calculateROI}
                      className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                    >
                      Calculate ROI
                    </button>
                  </div>

                  {/* Results Display */}
                  {results && (
                    <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
                      <h4 className="text-xl font-semibold text-green-900 mb-4">ROI Calculation Results</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Annual Savings:</span>
                            <span className="font-semibold text-green-600">₹{results.annualSavings.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Annual Software Cost:</span>
                            <span className="font-semibold">₹{results.annualSoftwareCost.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Implementation Cost:</span>
                            <span className="font-semibold">₹{results.implementationCost.toLocaleString()}</span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Total 3-Year Investment:</span>
                            <span className="font-semibold text-red-600">₹{results.totalInvestment.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Total 3-Year Benefits:</span>
                            <span className="font-semibold text-green-600">₹{results.totalBenefits.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Payback Period:</span>
                            <span className="font-semibold text-blue-600">{results.paybackPeriod.toFixed(1)} years</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 text-center">
                        <div className="text-3xl font-bold text-green-600">
                          ROI: {results.roi.toFixed(1)}%
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          Return on Investment over 3 years
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">ROI Timeline and Payback Period</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Typical ROI Timeline</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">1</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Year 1: Implementation and Learning</h4>
                        <p className="text-gray-600 text-sm">Initial investment, training, and gradual efficiency gains</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">2</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Year 2: Full Benefits Realization</h4>
                        <p className="text-gray-600 text-sm">Maximum efficiency gains and cost savings</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">3</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Year 3+: Sustained Benefits</h4>
                        <p className="text-gray-600 text-sm">Ongoing savings and strategic advantages</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h4 className="font-semibold text-green-900 mb-3">💡 Payback Period</h4>
                  <p className="text-green-800">
                    Most institutions see a positive ROI within 18-24 months, with full payback typically 
                    achieved by the end of year 2. The key is to focus on quick wins and gradual implementation 
                    to start seeing benefits early.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Maximizing Your ROI</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Quick Wins</h3>
                  <ul className="text-blue-800 space-y-2">
                    <li>• Automate routine administrative tasks</li>
                    <li>• Implement self-service portals</li>
                    <li>• Streamline approval workflows</li>
                    <li>• Reduce paper-based processes</li>
                    <li>• Improve data accuracy</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                  <h3 className="text-xl font-semibold text-purple-900 mb-4">Long-term Strategies</h3>
                  <ul className="text-purple-800 space-y-2">
                    <li>• Leverage analytics for decision-making</li>
                    <li>• Enhance student engagement</li>
                    <li>• Improve compliance and reporting</li>
                    <li>• Enable mobile access</li>
                    <li>• Integrate with other systems</li>
                  </ul>
                </div>
              </div>
            </section>

          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="/blog/how-to-choose-best-education-management-software" className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <span className="text-sm text-blue-600 font-semibold">Selection</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">How to Choose the Best Education Management Software</h4>
              <p className="text-gray-600 text-sm">Learn the key factors to consider when selecting education management software.</p>
            </a>
            
            <a href="/blog/complete-guide-university-management-systems" className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <span className="text-sm text-purple-600 font-semibold">Guides</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Complete Guide to University Management Systems</h4>
              <p className="text-gray-600 text-sm">Everything you need to know about university management systems and their implementation.</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Calculate Your Institution's ROI
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Let CampusHub help you calculate the potential ROI for your university management software investment with our detailed analysis framework.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-orange-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg">
              Get ROI Analysis
            </a>
            <a href="/demo" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-semibold py-3 px-8 rounded-lg transition-colors">
              Schedule Demo
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold gradient-text mb-4">CampusHub</h3>
              <p className="text-gray-400 mb-6 max-w-md">
                Comprehensive education management system designed to streamline academic operations, 
                enhance student experience, and empower educators with powerful tools.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="/#screenshots" className="hover:text-white transition-colors">Screenshots</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="/help" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CampusHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
