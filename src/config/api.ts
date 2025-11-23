export const API_CONFIG = {
  getBaseUrl: () => {
    // Check if we're running in production/Cloud Run vs local development
    if (process.env.NODE_ENV === 'development') {
      return 'http://localhost:8000';
    } else {
      return 'https://markwave-live-services-650581102834.asia-south1.run.app';
    }
  }
};

export const API_ENDPOINTS = {
  getUsers: () => `${API_CONFIG.getBaseUrl()}/users/customers`,
  getReferrals: () => `${API_CONFIG.getBaseUrl()}/users/referrals`,
  createUser: () => `${API_CONFIG.getBaseUrl()}/users/`,
  getUserDetails: (mobile: string) => `${API_CONFIG.getBaseUrl()}/users/${mobile}`,
  verifyUser: () => `${API_CONFIG.getBaseUrl()}/users/verify`,
  updateUser: (mobile: string) => `${API_CONFIG.getBaseUrl()}/users/${mobile}`,
  health: () => `${API_CONFIG.getBaseUrl()}/health`
};
