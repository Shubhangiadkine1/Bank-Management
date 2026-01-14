
import React, { useState } from 'react';
 const AccountType = {
  SAVINGS : 'Savings',
  CHECKING : 'Checking',
  BUSINESS : 'Business',
  FIXED_DEPOSIT : 'Fixed Deposit'
}

const MIN_DEPOSIT = 100;

const  Create_Account = ({ onAccountCreated }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    address: '',
    city: '',
    zip: '',
    accountType: AccountType.SAVINGS,
    initialDeposit: MIN_DEPOSIT,
    idNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newAccount = {
      id: Math.random().toString(36).substr(2, 9),
      accountNumber: `TG-${Math.floor(Math.random() * 1000000000)}`,
      ownerName: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      address: `${formData.address}, ${formData.city} ${formData.zip}`,
      accountType: formData.accountType,
      balance: Number(formData.initialDeposit),
      status: 'Active',
      createdAt: new Date().toISOString(),
      transactions: [
        {
          id: 'initial',
          date: new Date().toISOString(),
          type: 'Deposit',
          amount: Number(formData.initialDeposit),
          description: 'Initial Account Deposit'
        }
      ]
    };

    onAccountCreated(newAccount);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="bg-indigo-600 p-6 text-white">
        <h2 className="text-xl font-bold">New Account Application</h2>
        <p className="text-indigo-100 text-sm">Follow the 3 easy steps to open your account instantly.</p>
        
        <div className="flex mt-6 items-center">
          {[1, 2, 3].map((s) => (
            <React.Fragment key={s}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                step >= s ? 'bg-white text-indigo-600' : 'bg-indigo-400 text-indigo-200'
              }`}>
                {s}
              </div>
              {s < 3 && <div className={`h-1 flex-1 mx-2 rounded ${step > s ? 'bg-white' : 'bg-indigo-400'}`}></div>}
            </React.Fragment>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-8">
        {step === 1 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
            <h3 className="text-lg font-semibold border-b pb-2 mb-4 text-slate-800">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                <input required name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="John" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                <input required name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Date of Birth</label>
                <input required type="date" name="dob" value={formData.dob} onChange={handleChange} className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">SSN / ID Number</label>
                <input required name="idNumber" value={formData.idNumber} onChange={handleChange} className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="XXX-XX-XXXX" />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
            <h3 className="text-lg font-semibold border-b pb-2 mb-4 text-slate-800">Contact & Address</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="john.doe@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                <input required name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="+1 (555) 000-0000" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">Home Address</label>
                <textarea required name="address" value={formData.address} onChange={handleChange} className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="123 Bank Street" rows={2}></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">City</label>
                <input required name="city" value={formData.city} onChange={handleChange} className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="New York" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">ZIP Code</label>
                <input required name="zip" value={formData.zip} onChange={handleChange} className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="10001" />
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
            <h3 className="text-lg font-semibold border-b pb-2 mb-4 text-slate-800">Account Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Account Type</label>
                <select name="accountType" value={formData.accountType} onChange={handleChange} className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none bg-white">
                  {Object.values(AccountType).map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Initial Deposit ($)</label>
                <input 
                  required 
                  type="number" 
                  min={MIN_DEPOSIT} 
                  name="initialDeposit" 
                  value={formData.initialDeposit} 
                  onChange={handleChange} 
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" 
                />
                <p className="text-xs text-slate-500 mt-1">Minimum deposit required: ${MIN_DEPOSIT}</p>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-100">
              <h4 className="font-semibold text-slate-800 mb-2">Terms and Conditions</h4>
              <div className="flex items-start space-x-3">
                <input required type="checkbox" id="terms" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                <label htmlFor="terms" className="text-sm text-slate-600">
                  I certify that all information provided is accurate and I agree to TrustGuard's terms of service and privacy policy. I am over 18 years of age.
                </label>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-10 pt-6 border-t">
          {step > 1 ? (
            <button type="button" onClick={prevStep} className="px-6 py-2 text-slate-600 font-medium hover:text-indigo-600 transition-colors">
              Back
            </button>
          ) : <div></div>}
          
          {step < 3 ? (
            <button 
              type="button" 
              onClick={nextStep} 
              className="px-8 py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all"
            >
              Next Step
            </button>
          ) : (
            <button 
              type="submit" 
              className="px-10 py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 shadow-md hover:shadow-lg transition-all flex items-center space-x-2"
            >
              <span>Finalize & Create Account</span>
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Create_Account;
