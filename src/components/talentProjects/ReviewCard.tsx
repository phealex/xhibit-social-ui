import { FC } from 'react'
import { Card, CardContent } from '../ui/card'
import { ReviewType } from '@/types'
import { Separator } from '../ui/separator'
import { Star } from 'lucide-react'

interface ReviewCardProps {
    review: ReviewType
}
const ReviewCard: FC<ReviewCardProps> = ({
    review
}) => {
  return (
    <Card className='w-[300px] border-none outline-none  '>
        <CardContent className='flex gap-1 w-full !p-2 items-start '>
            <img src={review.userImage} alt="" className=" h-5 w-5" />
            <div className="flex flex-col gap-3">
                <div className="flex gap-2 flex-col">
                    <p className="font-Jakarta font-medium text-[13px] leading-4 text-dark_green">{review.user}</p>
                    <p className="font-Jakarta font-normal text-[13px] leading-4 text-dark_green/70">{review.userLocation}</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                        {
                            Array(review.rating).fill(0).map((_, index) => (
                                <Star key={index} fill='#FFC107' className="text-[#FFC107] text-[16px]" />
                            ))
                        }
                        <p className=" font-Jakarta font-medium text-xs text-dark_green">
                            {review.rating}
                        </p>
                    </div>
                    <Separator orientation="vertical" className="h-[20px]" />
                    <div className=" font-Jakarta font-normal text-xs text-dark_green/70">
                        {review.time} ago
                    </div>
                </div>
                <p className=" font-Jakarta font-normal text-xs text-dark_green">
                    {review.review}
                </p>
            </div>

        </CardContent>

    </Card>
  )
}

export default ReviewCard