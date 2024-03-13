import { JobsDisplayState } from '@/types'
import { create } from 'zustand'
export const useJobsDisplay = create<JobsDisplayState>()((set) => ({
    // showBrowseJobs: true,
    // setShowBrowseJobs: (showBrowseJobs) => set({ showBrowseJobs }),
    showJobDetails: false,
    setShowJobDetails: (showJobDetails) => set({ showJobDetails }),
    viewToShow: 'browse',
    setViewToShow: (viewToShow) => set({ viewToShow }),
}))