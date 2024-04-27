import { JobsDisplayState, MessageDisplayState, ProjectDisplayState, ProjectFormState, WalletState, WorkProfileState } from '@/types'
import { create } from 'zustand'
export const useJobsDisplay = create<JobsDisplayState>()((set) => ({
    // showBrowseJobs: true,
    // setShowBrowseJobs: (showBrowseJobs) => set({ showBrowseJobs }),
    showJobDetails: false,
    setShowJobDetails: (showJobDetails) => set({ showJobDetails }),
    viewToShow: 'browse',
    setViewToShow: (viewToShow) => set({ viewToShow }),
    jobToShowId: null,
    setJobToShowId: (jobToShowId) => set({jobToShowId}),
    detailsToShow: "details",
    setDetailsToShow: (detailsToShow) => set({detailsToShow}),
    isApplying: false,
    setIsApplying: (isApplying) => set({isApplying}),
    isApplied: false,
    setIsApplied: (isApplied) => set({isApplied}),
    showStartupProfile: false,
    startupProfileId: null,
    showBlogDetails: false,
    blogToShowId: null,
}))



export const useMessagesDisplay = create<MessageDisplayState>()((set) => ({
    chatToShow: null,
    setChatToShow: (chatToShow) => set({chatToShow}),
    chatCategoryToShow: "message"
}))


export const useProjectDisplay = create<ProjectDisplayState>()((set) => ({
    view: "projects",
    showProjectDetails: false,
    projectToShowId: null,
    setProjectToShowId: (projectToShowId) => set({projectToShowId}),
    addNew: null,
    projectModalActive: "projects"

}))

export const useProjectFormState = create<ProjectFormState>((set) => ({
    projectForm: {
      title: '',
      category: '',
      duration: {
        from: new Date(),
        to: new Date(),
      },
      description: '',
      role: '',
      technologies:  [],
      skills: [],
      url: '',
      image: {
        type: '',
        size: 0,
        name: '',
      },
      file: {
        type: '',
        size: 0,
        name: '',
      },
      access: '',
    },
    setProjectForm: (form) => set({ projectForm: form }),
  }));


  export const useWorkProfileState = create<WorkProfileState>()((set) => ({
    activeTab: "about"
  }))


  export const useWalletState = create<WalletState>()((set) => ({
    isFundWallet: false,
    amountToFund: 0,
    paymentOption: undefined,
    setPaymentOption: (paymentOption) => set({paymentOption}),
    isConfirmTransaction: false,
    isShowWalletVerification: false,
    setShowWalletVerification: (isShowWalletVerification) => set({isShowWalletVerification}),
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
      imageFile: undefined
    },
  }))