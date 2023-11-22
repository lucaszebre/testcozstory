import {create} from 'zustand';
type MobileMenuStore = {
    mobileMenuOpen: boolean;
    openMobileMenu: () => void;
    closeMobileMenu: () => void;
  };
  
  const useMobileMenuStore = create<MobileMenuStore>((set) => ({
  mobileMenuOpen: false, // Initial state



  // Function to open the mobile menu
  openMobileMenu: () => {
    set({ mobileMenuOpen: true });
  },

  // Function to close the mobile menu
  closeMobileMenu: () => {
    set({ mobileMenuOpen: false });
  },
}));

export default useMobileMenuStore;
