import React, { useState } from 'react';
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Shield,
  Chrome,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    agreeTerms: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log(isLogin ? 'Login submitted' : 'Signup submitted', formData);
    }, 2000);
  };

  const handleGoogleSignIn = () => {
    console.log('Google Sign In clicked');
    // Handle Google OAuth here
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        ></div>
      </div>

      <div className='relative w-full max-w-md'>
        {/* Login/Signup Card */}
        <div className='bg-white/10 backdrop-blur-lg border border-gray-700/50 rounded-2xl shadow-2xl p-8'>
          {/* Header */}
          <div className='text-center mb-8'>
            <div className='inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-full mb-4'>
              <Shield className='h-8 w-8 text-blue-400' />
            </div>
            <h1 className='text-3xl font-bold text-white mb-2'>Admin Panel</h1>
            <p className='text-gray-300 text-sm'>
              {isLogin
                ? 'Sign in to your account'
                : 'Create your admin account'}
            </p>
          </div>

          {/* Google Sign In Button */}
          <button
            onClick={handleGoogleSignIn}
            className='w-full flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-gray-600/50 hover:border-gray-500/50 text-white py-3 px-4 rounded-lg font-medium transition-all duration-200 mb-6'
          >
            <Chrome className='h-5 w-5' />
            {isLogin ? 'Sign in with Google' : 'Sign up with Google'}
          </button>

          {/* Divider */}
          <div className='relative mb-6'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t border-gray-600/50'></div>
            </div>
            <div className='relative flex justify-center text-sm'>
              <span className='px-4 bg-transparent text-gray-400'>
                or continue with email
              </span>
            </div>
          </div>

          {/* Form Fields */}
          <div className='space-y-5'>
            {/* Full Name (Signup only) */}
            {!isLogin && (
              <div>
                <label className='block text-sm font-medium text-gray-300 mb-2'>
                  Full Name
                </label>
                <div className='relative'>
                  <User className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400' />
                  <input
                    type='text'
                    name='fullName'
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className='w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                    placeholder='Enter your full name'
                    required={!isLogin}
                  />
                </div>
              </div>
            )}

            {/* Email */}
            <div>
              <label className='block text-sm font-medium text-gray-300 mb-2'>
                Email Address
              </label>
              <div className='relative'>
                <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400' />
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  className='w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                  placeholder='Enter your email'
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className='block text-sm font-medium text-gray-300 mb-2'>
                Password
              </label>
              <div className='relative'>
                <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400' />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  value={formData.password}
                  onChange={handleInputChange}
                  className='w-full pl-10 pr-12 py-3 bg-white/10 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                  placeholder='Enter your password'
                  required
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300'
                >
                  {showPassword ? (
                    <EyeOff className='h-5 w-5' />
                  ) : (
                    <Eye className='h-5 w-5' />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password (Signup only) */}
            {!isLogin && (
              <div>
                <label className='block text-sm font-medium text-gray-300 mb-2'>
                  Confirm Password
                </label>
                <div className='relative'>
                  <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400' />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name='confirmPassword'
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className='w-full pl-10 pr-12 py-3 bg-white/10 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                    placeholder='Confirm your password'
                    required={!isLogin}
                  />
                  <button
                    type='button'
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300'
                  >
                    {showConfirmPassword ? (
                      <EyeOff className='h-5 w-5' />
                    ) : (
                      <Eye className='h-5 w-5' />
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Remember Me / Forgot Password (Login) */}
            {isLogin && (
              <div className='flex items-center justify-between'>
                <label className='flex items-center'>
                  <input
                    type='checkbox'
                    className='h-4 w-4 bg-white/10 border-gray-600/50 rounded text-blue-600 focus:ring-blue-500 focus:ring-2'
                  />
                  <span className='ml-2 text-sm text-gray-300'>
                    Remember me
                  </span>
                </label>
                <button
                  type='button'
                  className='text-sm text-blue-400 hover:text-blue-300 transition-colors'
                >
                  Forgot password?
                </button>
              </div>
            )}

            {/* Terms Agreement (Signup only) */}
            {!isLogin && (
              <div className='flex items-start'>
                <div className='flex items-center h-5 mt-1'>
                  <input
                    type='checkbox'
                    name='agreeTerms'
                    checked={formData.agreeTerms}
                    onChange={handleInputChange}
                    className='h-4 w-4 bg-white/10 border-gray-600/50 rounded text-blue-600 focus:ring-blue-500 focus:ring-2'
                    required={!isLogin}
                  />
                </div>
                <div className='ml-3'>
                  <label className='text-sm text-gray-300'>
                    I agree to the{' '}
                    <button
                      type='button'
                      className='text-blue-400 hover:text-blue-300 transition-colors underline'
                    >
                      Terms of Service
                    </button>{' '}
                    and{' '}
                    <button
                      type='button'
                      className='text-blue-400 hover:text-blue-300 transition-colors underline'
                    >
                      Privacy Policy
                    </button>
                  </label>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type='button'
              onClick={handleSubmit}
              disabled={isLoading || (!isLogin && !formData.agreeTerms)}
              className='w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:cursor-not-allowed'
            >
              {isLoading ? (
                <>
                  <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white'></div>
                  {isLogin ? 'Signing In...' : 'Creating Account...'}
                </>
              ) : (
                <>
                  {isLogin ? 'Sign In' : 'Create Account'}
                  <ArrowRight className='h-5 w-5' />
                </>
              )}
            </button>
          </div>

          {/* Toggle Login/Signup */}
          <div className='mt-8 text-center'>
            <p className='text-gray-300 text-sm'>
              {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className='text-blue-400 hover:text-blue-300 font-medium transition-colors'
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>

          {/* Security Note */}
          <div className='mt-6 p-4 bg-blue-900/20 border border-blue-700/30 rounded-lg'>
            <div className='flex items-start gap-3'>
              <CheckCircle className='h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0' />
              <div>
                <p className='text-sm text-blue-200 font-medium'>
                  Secure Admin Access
                </p>
                <p className='text-xs text-blue-300/80 mt-1'>
                  This is a protected admin area. All activities are logged and
                  monitored.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className='text-center mt-8'>
          <p className='text-gray-400 text-xs'>
            © 2025 Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
