import { JobsDisplayState, MessageDisplayState } from '@/types'
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