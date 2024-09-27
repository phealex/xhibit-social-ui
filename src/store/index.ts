import { TransactionRecords } from "@/constants";
import {
  JobsDisplayState,
  MessageDisplayState,
  MyJobsState,
  ProjectDisplayState,
  ProjectFormState,
  RecruiterState,
  UserState,
  WalletState,
  WorkProfileState,
} from "@/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useUserState = create<UserState>()(
  persist(
    (set) => ({
      userType: null,
      setUserType: (userType) => set({ userType }),
      user: null,
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
export const useJobsDisplay = create<JobsDisplayState>()((set) => ({
  // showBrowseJobs: true,
  // setShowBrowseJobs: (showBrowseJobs) => set({ showBrowseJobs }),
  showJobDetails: false,
  setShowJobDetails: (showJobDetails) => set({ showJobDetails }),
  viewToShow: "browse",
  setViewToShow: (viewToShow) => set({ viewToShow }),
  jobToShowId: null,
  setJobToShowId: (jobToShowId) => set({ jobToShowId }),
  detailsToShow: "details",
  setDetailsToShow: (detailsToShow) => set({ detailsToShow }),
  isApplying: false,
  setIsApplying: (isApplying) => set({ isApplying }),
  isApplied: false,
  setIsApplied: (isApplied) => set({ isApplied }),
  showStartupProfile: false,
  startupProfileId: null,
  showBlogDetails: false,
  blogToShowId: null,
}));

export const useMessagesDisplay = create<MessageDisplayState>()((set) => ({
  chatToShow: null,
  setChatToShow: (chatToShow) => set({ chatToShow }),
  chatCategoryToShow: "message",
}));

export const useProjectDisplay = create<ProjectDisplayState>()((set) => ({
  view: "projects",
  showProjectDetails: false,
  projectToShowId: null,
  setProjectToShowId: (projectToShowId) => set({ projectToShowId }),
  addNew: null,
  projectModalActive: "projects",
  isServiceCheckout: false,
}));

export const useProjectFormState = create<ProjectFormState>((set) => ({
  projectForm: {
    title: "",
    category: "",
    duration: {
      from: new Date(),
      to: new Date(),
    },
    description: "",
    role: "",
    technologies: [],
    skills: [],
    url: "",
    image: {
      type: "",
      size: 0,
      name: "",
    },
    file: {
      type: "",
      size: 0,
      name: "",
    },
    access: "",
  },
  setProjectForm: (form) => set({ projectForm: form }),
}));

export const useWorkProfileState = create<WorkProfileState>()((set) => ({
  activeTab: "about",
}));

export const useWalletState = create<WalletState>()((set) => ({
  isFundWallet: false,
  amountToFund: 0,
  paymentOption: undefined,
  setPaymentOption: (paymentOption) => set({ paymentOption }),
  isConfirmTransaction: false,
  isShowWalletVerification: false,
  setShowWalletVerification: (isShowWalletVerification) =>
    set({ isShowWalletVerification }),
  verificationData: {
    bankName: "",
    accountNumber: "",
    bvn: "",
    idType: "",
    idNumber: "",
    image: {
      type: "",
      size: 0,
      name: "",
    },
    imageFile: undefined,
  },
  isShowWithdrawal: false,
  withdrawalType: "bank",
  transactionRecords: TransactionRecords,
  setTransactionRecords: (transactionRecords) => set({ transactionRecords }),
}));

export const useRecruiterState = create<RecruiterState>()((set) => ({
  isProfileSetup: false,
  setIsProfileSetup: (isProfileSetup) => set({ isProfileSetup }),
  profileSetupTab: "organization",
}));

export const useMyJobsState = create<MyJobsState>()((set) => ({
  isAddJob: false,
  isEditJob: false,
  jobData: {
    title: "",
    contractType: "",
    openRoles: 0,
    category: [],
    description: "",
    hours: 0,
    location: [],
    jobType: undefined,
    experience: "",
    skills: [],
    rateType: "",
    rate: 0,
    questions: undefined,
  },
}));
