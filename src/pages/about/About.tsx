import { AboutConf, Jerome, Logo, Teamwork } from "@/assets";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { FC } from "react";

const About: FC = () => {
  return (
    <div className="w-full bg-home_gradient space-y-[100px] py-[60px]">
      <section className="flex flex-col gap-[100px] w-[90%] mx-auto ">
        <div className="flex flex-col gap-8 items-center">
          <div className="flex flex-col gap-5 items-center justify-center">
            <h1 className="text-center font-Jakarta font-semibold text-[31px] leading-[44px] text-white/80 uppercase ">
              our mission
            </h1>
            <p className="text-white font-Jakarta text-[31px]  font-semibold leading-[44px] text-center">
              Empowering individuals to forge extraordinary remote careers from
              any corner of the world. Our mission is to inspire and support
              your journey towards an amazing and fulfilling professional
              adventure.
            </p>
          </div>
          <img src={AboutConf} alt="" className=" object-cover" />
        </div>
        <div className="flex flex-col gap-[10px]">
          <div className="flex flex-col gap-5">
            <h1 className="text-white font-Jakarta font-bold text-[31px] leading-[44px] text-center">
              About XHIBIT
            </h1>
            <p className="text-[16px]  text-white font-Jakarta font-medium text-center">
              We believe you don't have to live in a tech hub to do great work.
            </p>
          </div>
          <p className="text-[13px] font-normal font-Jakarta leading-6 text-white/80 text-center">
            At XHIBIT, we believe exceptional talent is found everywhere, and
            our mission is to seamlessly connect this talent with organizations
            seeking their unique skills. As a pioneering remote career platform,
            we eliminate the complexities for both job seekers and organizations
            in the hiring equation. XHIBIT is dedicated to assisting developers
            in preparing for and securing remote jobs while streamlining the
            remote hiring process for organizations. Join us in shaping a future
            where talent meets opportunity effortlessly.
          </p>
        </div>
      </section>
      <section className="w-full bg-dark_green/40 py-5">
        <div className="flex flex-col gap-[30px] w-[90%] mx-auto">
          <div className="flex flex-col gap-5">
            <h1 className="text-white font-Jakarta font-bold text-[31px] leading-[44px] text-center">
              From our founder
            </h1>
            <p className="text-[13px] font-normal font-Jakarta leading-6 text-white/80 text-center">
              Having personally experienced the transformative power of
              accessing international opportunities, I embarked on a journey
              that took me to Silicon Valley many years ago. This not only
              opened new doors for me but also for the incredible individuals I
              encountered along the way.
              <br />
              In today's interconnected world, the internet has dismantled
              barriers, liberating opportunities from geographical constraints.
              This liberation is profound.
              <br /> No longer must individuals sacrifice their connections or
              preferred lifestyle to secure fulfilling employment.
              <br /> Similarly, organizations are no longer confined to a
              limited talent pool when exceptional skills are scattered
              globally.
              <br />I extend an invitation to you: join us in co-creating a
              future where remote work is seamlessly integrated, normalized, and
              trusted by both job seekers and organizations. Together, let's
              build a world where the potential of remote work knows no bounds.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {/* <img src={JeromeSingature} alt="" className="text-white" /> */}
            <div className="w-[20%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="95"
                height="41"
                viewBox="0 0 95 41"
                fill="none"
              >
                <g clip-path="url(#clip0_2104_17720)">
                  <path
                    d="M19.1299 24.1677L22.1161 23.9014C22.4325 23.9014 22.5888 24.0678 22.5849 24.4008C22.58 24.8225 22.2605 25.0889 21.6265 25.1999C21.015 25.3108 20.3586 25.3997 19.6573 25.4662C18.9559 25.5328 18.5354 25.7437 18.3957 26.0988C17.7781 28.6959 17.007 30.8823 16.0825 32.658C15.1803 34.456 14.3281 35.8433 13.5258 36.8199C12.7233 37.8187 11.7419 38.6511 10.5816 39.317C9.42139 39.983 8.25364 40.3159 7.07849 40.3159C5.90333 40.3159 4.92374 40.0163 4.13971 39.417C3.37801 38.8398 2.7993 38.0741 2.40356 37.1196C1.67886 35.2994 1.32858 33.3461 1.35273 31.2596C1.37097 29.6837 1.67068 28.1964 2.25184 26.798C2.55436 26.0434 3.00224 25.4218 3.59547 24.9335C4.2113 24.4452 4.9147 24.201 5.70567 24.201C6.51924 24.201 6.92397 24.3786 6.91985 24.7337L6.88441 24.8669C6.65868 24.8447 6.37632 24.8336 6.03733 24.8336C5.69835 24.8336 5.27898 24.9446 4.77923 25.1666C4.30208 25.3885 3.90248 25.7437 3.58044 26.232C3.2584 26.7204 2.9917 27.3086 2.78035 27.9967C2.47397 29.0843 2.31474 30.1497 2.30267 31.193C2.29034 32.2584 2.35851 33.2018 2.5072 34.0231C2.63329 34.8444 2.86095 35.6767 3.19017 36.5203C3.51939 37.3637 4.00861 38.0518 4.65782 38.5846C5.32963 39.1173 6.11752 39.3837 7.02148 39.3837C8.42263 39.3837 9.75047 38.8842 11.005 37.8854C12.2592 36.9087 13.3133 35.6546 14.1672 34.123C15.829 31.1264 16.9132 28.2519 17.4196 25.4995C14.2668 24.545 12.7054 22.7693 12.7355 20.1723C12.7172 19.795 12.7112 19.3399 12.7173 18.8072C12.7235 18.2744 12.7988 17.6307 12.9431 16.876C13.11 16.1214 13.458 15.3445 13.987 14.5454C14.5389 13.7241 15.0553 13.036 15.5363 12.481C16.0174 11.9262 16.7495 11.1493 17.7329 10.1504C18.7388 9.15159 19.5622 8.29697 20.2032 7.58669C20.3427 7.25373 20.4611 6.7876 20.5584 6.18829C20.6786 5.56677 20.7869 5.00076 20.8832 4.49023C20.9797 3.9575 21.1215 3.42478 21.3084 2.89206C21.7055 1.78222 22.5029 1.22729 23.7006 1.22729C24.1978 1.22729 24.5021 1.29389 24.6135 1.42706C24.7479 1.53805 24.8117 1.8821 24.805 2.45922C24.7983 3.03633 24.622 3.62455 24.2761 4.22386C23.9304 4.80099 23.4257 5.45579 22.7619 6.18829C22.0982 6.89859 21.686 7.36472 21.5253 7.58669C21.3871 7.80866 21.2821 8.09721 21.2102 8.45236C21.1609 8.80751 21.0734 9.52889 20.9479 10.6166C20.4268 14.6342 19.9963 17.653 19.6565 19.6729C19.3168 21.6927 19.1412 23.191 19.1299 24.1677ZM13.6191 19.9725C13.607 21.0157 13.9573 21.9924 14.6699 22.9025C15.4052 23.8126 16.2926 24.2676 17.3322 24.2676C17.5582 24.2676 17.7063 24.1566 17.7767 23.9347L19.8623 10.6831L19.8765 9.4512C18.3948 10.561 16.9862 12.1814 15.6508 14.3124C14.3156 16.421 13.6384 18.3077 13.6191 19.9725ZM23.8948 2.02638C23.1942 2.02638 22.6702 2.39263 22.3227 3.12513C21.9981 3.83543 21.8313 4.57902 21.8223 5.3559C21.8431 5.51128 21.8532 5.61117 21.8527 5.65556C23.1979 4.63451 23.8785 3.42478 23.8948 2.02638Z"
                    fill="#FFFFFF"
                    fill-opacity="0.7"
                  />
                  <path
                    d="M21.5941 22.3027C21.5738 22.1029 21.5647 21.9143 21.5667 21.7366C21.5831 20.3161 22.0747 18.8511 23.0413 17.3417C24.0305 15.8323 25.2822 15.0776 26.7964 15.0776C27.0902 15.0776 27.3264 15.1664 27.5052 15.344C27.6841 15.4993 27.7714 15.7768 27.7668 16.1764C27.7624 16.5537 27.6441 17.0087 27.412 17.5415C27.2027 18.052 26.8689 18.5736 26.4108 19.1063C25.9752 19.6391 25.5973 20.0719 25.2771 20.4049C24.9568 20.7378 24.4998 21.1706 23.9061 21.7034C23.335 22.2361 22.9922 22.5579 22.878 22.6689C22.8533 22.8465 22.8408 22.9464 22.8406 22.9686C22.8337 23.5679 23.1221 24.034 23.7058 24.367C24.2895 24.6999 24.8978 24.8664 25.5305 24.8664C27.0447 24.8664 28.2455 24.6001 29.1331 24.0673C30.0431 23.5346 31.0931 22.6356 32.2829 21.3704C32.4663 21.1485 32.5701 20.9709 32.5942 20.8377C32.6409 20.7046 32.7669 20.5603 32.9721 20.4049C33.1971 20.4936 33.3076 20.7046 33.3038 21.0375C33.0698 21.7256 32.6092 22.4692 31.922 23.2683C31.235 24.0452 30.4251 24.711 29.4921 25.2659C28.1954 25.9985 27.0951 26.3647 26.1911 26.3647C25.3098 26.3647 24.4545 26.065 23.6253 25.4657C22.7961 24.8664 22.119 23.8121 21.5941 22.3027ZM26.8499 16.3096C25.8781 16.3096 24.9683 16.8201 24.1203 17.8411C23.2723 18.8622 22.8429 19.8389 22.8321 20.7711C22.8285 21.0819 22.8486 21.3039 22.8922 21.437C23.7335 20.9931 24.6011 20.2384 25.4948 19.1729C26.3887 18.0853 26.8404 17.1309 26.8499 16.3096Z"
                    fill="#FFFFFF"
                    fill-opacity="0.7"
                  />
                  <path
                    d="M41.5774 23.6676C41.5941 24.1782 41.9866 24.4334 42.7549 24.4334C43.2069 24.4334 43.7164 24.3446 44.2834 24.1671C44.8505 23.9895 45.3941 23.8785 45.9144 23.8341C46.4574 23.7897 46.727 23.9229 46.7234 24.2336C45.7671 24.8552 44.4521 25.2214 42.7784 25.3324C42.6878 25.3546 42.5972 25.3657 42.5068 25.3657C41.8741 25.3657 41.3786 25.2214 41.0203 24.9329C40.6849 24.6221 40.5193 24.2892 40.5234 23.934C40.5275 23.5789 40.5536 23.2792 40.6016 23.035C40.6073 22.5467 40.7171 21.8364 40.9314 20.9042C41.1681 19.9719 41.2892 19.2726 41.2946 18.8065C40.8878 18.8065 40.1862 18.8953 39.1898 19.0729C38.2163 19.2282 37.514 19.3725 37.0831 19.5057C36.486 22.2803 35.4816 24.1227 34.0699 25.0327C33.6601 25.2991 33.3421 25.4323 33.1161 25.4323C32.9128 25.4323 32.7551 25.3879 32.6431 25.2991C32.554 25.1881 32.5102 25.066 32.5118 24.9329C32.5135 24.7775 32.6175 24.5777 32.8238 24.3335C33.5238 24.3779 34.0474 24.045 34.3947 23.3347C34.7414 22.6688 35.0208 21.9585 35.2329 21.2038C35.4679 20.4269 35.6552 19.8609 35.7949 19.5057C34.7377 19.084 34.2128 18.5512 34.2202 17.9075C34.2338 16.7311 34.7628 15.932 35.8073 15.5103C36.1704 15.3771 36.5328 15.3105 36.8944 15.3105C37.2559 15.3105 37.5822 15.4326 37.8732 15.6768C38.1868 15.9209 38.341 16.265 38.3358 16.7089C38.3307 17.1529 38.0298 17.7632 37.4332 18.5402C37.5011 18.5402 37.9088 18.4514 38.6567 18.2738C40.7194 17.7411 41.9654 17.4747 42.3948 17.4747C42.3868 18.1629 42.2505 19.2061 41.9857 20.6045C41.7211 21.9807 41.5851 23.0017 41.5774 23.6676ZM36.5788 16.2095C36.1495 16.2095 35.7826 16.6645 35.4783 17.5746C35.4737 17.9742 35.7977 18.296 36.4502 18.5402C36.9301 18.074 37.1728 17.619 37.1778 17.1751C37.1799 16.9975 37.1258 16.7977 37.0153 16.5758C36.9278 16.3315 36.7822 16.2095 36.5788 16.2095Z"
                    fill="#FFFFFF"
                    fill-opacity="0.7"
                  />
                  <path
                    d="M55.1561 16.3763L55.2093 17.6414C55.2039 18.1076 55.1657 18.4738 55.0948 18.7402C55.0468 18.9843 55.0107 19.173 54.9866 19.3062C54.9624 19.4394 54.9039 19.617 54.811 19.839C54.7182 20.0387 54.66 20.183 54.6364 20.2718C54.6128 20.3606 54.5318 20.527 54.3934 20.7712C54.255 21.0153 54.1627 21.1707 54.1168 21.2373C54.0934 21.304 53.9895 21.4926 53.8051 21.8033C53.6436 22.0919 53.5397 22.2806 53.4935 22.3693H54.1715C55.4822 22.3693 57.4104 21.7479 59.9558 20.5048L60.2236 20.8045C58.0343 22.5137 55.4697 23.446 52.53 23.6013L49.5262 25.3993C49.2524 25.6212 48.6523 25.7322 47.7257 25.7322C46.8217 25.7322 46.237 25.488 45.9714 24.9997C45.7287 24.4892 45.6136 23.7012 45.6259 22.6357C45.6383 21.5703 46.1042 20.3606 47.0239 19.0066C47.9661 17.6526 49.0361 16.9756 50.2339 16.9756C50.7762 16.9756 51.124 17.1975 51.277 17.6414C50.0071 18.0188 48.9147 18.6736 48 19.6059C47.0853 20.5381 46.6208 21.6147 46.6067 22.8355C46.6018 23.2573 46.6205 23.5902 46.6629 23.8343C46.7053 24.0785 46.827 24.3005 47.028 24.5003C47.2291 24.7 47.6235 24.8 48.211 24.8C49.4314 24.8 50.4316 24.3005 51.2115 23.3017C50.9899 22.9243 50.884 22.3139 50.8937 21.4704C50.9037 20.6047 50.9809 19.7946 51.1252 19.0399C51.2924 18.263 51.6061 17.5193 52.0663 16.809C52.5265 16.0988 53.0956 15.7437 53.7736 15.7437C54.4516 15.7437 54.9124 15.9545 55.1561 16.3763ZM54.2567 17.9411L54.2955 17.5083C54.3007 17.0643 54.1682 16.798 53.898 16.7092C53.3066 17.0421 52.825 17.6414 52.4534 18.5071C52.0818 19.3728 51.8918 20.1719 51.8834 20.9044C51.8748 21.6369 51.9834 22.0253 52.2088 22.0697C52.8457 21.7146 53.3383 21.1374 53.6865 20.3383C54.0574 19.5393 54.2471 18.7624 54.2559 18.0077L54.2567 17.9411Z"
                    fill="#FFFFFF"
                    fill-opacity="0.7"
                  />
                  <path
                    d="M83.3759 23.5683C83.3975 23.6571 83.4082 23.7237 83.4075 23.7681C83.4013 24.3008 82.6613 24.778 81.1875 25.1998C79.7367 25.6214 78.6382 25.8324 77.8921 25.8324C75.0899 25.8324 73.7038 24.5338 73.7339 21.9368C73.7418 21.2487 73.9228 20.2609 74.2766 18.9735C74.6305 17.6861 74.8113 16.7094 74.819 16.0435C73.3902 16.4874 71.8962 17.675 70.3371 19.6061C68.7782 21.5151 67.5468 23.4462 66.6429 25.3995C66.5057 25.5327 66.3238 25.6326 66.097 25.6991C65.8702 25.7658 65.7009 25.7547 65.5889 25.6658C65.4998 25.5549 65.4562 25.4106 65.4583 25.233C65.4606 25.0332 65.5549 24.7003 65.7411 24.2341L67.9229 17.3088C67.812 17.1312 67.6662 17.0424 67.4853 17.0424C66.8978 17.0424 65.8593 17.9191 64.3701 19.6728C63.9808 20.1167 63.1325 21.1599 61.8254 22.8024C60.1977 24.8002 59.1466 25.7991 58.672 25.7991C58.6269 25.7991 58.5594 25.7658 58.4698 25.6991C58.3804 25.6104 58.3473 25.5438 58.3704 25.4994L60.8835 19.2399L62.4934 14.8782C62.6069 14.8338 62.7089 14.8116 62.7992 14.8116C63.1382 14.8116 63.3055 15.0003 63.3012 15.3776C63.2968 15.755 63.2471 16.1434 63.1521 16.543C63.0573 16.9203 62.6605 18.008 61.9618 19.8059L67.1275 15.7439C67.5597 15.4997 67.9114 15.3776 68.1825 15.3776C68.6572 15.3776 68.8902 15.7439 68.8817 16.4764C68.8769 16.8981 68.7322 17.675 68.448 18.8071C68.1863 19.9391 68.0431 20.5939 68.0185 20.7714C68.4291 20.4385 69.2865 19.5839 70.5905 18.2078C72.8553 15.8327 74.4397 14.6451 75.3437 14.6451C75.6601 14.6451 75.9301 14.745 76.1538 14.9448C76.1453 15.6773 75.9067 16.7649 75.4381 18.2078C74.9694 19.6505 74.7295 20.8491 74.7185 21.8036C74.6949 23.8458 75.8582 24.8668 78.2082 24.8668C79.4744 24.8668 81.1967 24.4339 83.3759 23.5683Z"
                    fill="#FFFFFF"
                    fill-opacity="0.7"
                  />
                  <path
                    d="M82.5077 22.3027C82.4877 22.1029 82.4785 21.9143 82.4808 21.7366C82.497 20.3161 82.9885 18.8511 83.9554 17.3417C84.9447 15.8323 86.1962 15.0776 87.7108 15.0776C88.0039 15.0776 88.2408 15.1664 88.4193 15.344C88.5985 15.4993 88.6854 15.7768 88.6808 16.1764C88.6762 16.5537 88.5585 17.0087 88.3262 17.5415C88.117 18.052 87.7831 18.5736 87.3247 19.1063C86.8893 19.6391 86.5116 20.0719 86.1908 20.4049C85.8708 20.7378 85.4139 21.1706 84.82 21.7034C84.2493 22.2361 83.9062 22.5579 83.7924 22.6689C83.7677 22.8465 83.7547 22.9464 83.7547 22.9686C83.7477 23.5679 84.0362 24.034 84.62 24.367C85.2039 24.6999 85.8116 24.8664 86.4447 24.8664C87.9585 24.8664 89.1593 24.6001 90.047 24.0673C90.957 23.5346 92.007 22.6356 93.197 21.3704C93.38 21.1485 93.4839 20.9709 93.5085 20.8377C93.5547 20.7046 93.6808 20.5603 93.8862 20.4049C94.1108 20.4936 94.2216 20.7046 94.2177 21.0375C93.9839 21.7256 93.5231 22.4692 92.8362 23.2683C92.1493 24.0452 91.3393 24.711 90.4062 25.2659C89.1093 25.9985 88.0093 26.3647 87.1054 26.3647C86.2239 26.3647 85.3685 26.065 84.5393 25.4657C83.71 24.8664 83.0331 23.8121 82.5077 22.3027ZM87.7639 16.3096C86.7924 16.3096 85.8824 16.8201 85.0347 17.8411C84.1862 18.8622 83.757 19.8389 83.7462 20.7711C83.7424 21.0819 83.7624 21.3039 83.8062 21.437C84.6477 20.9931 85.5154 20.2384 86.4085 19.1729C87.3031 18.0853 87.7547 17.1309 87.7639 16.3096Z"
                    fill="#FFFFFF"
                    fill-opacity="0.7"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2104_17720">
                    <rect
                      width="93.8462"
                      height="40"
                      fill="white"
                      transform="translate(0.828125 0.580078)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex gap-2 items-center">
              <img src={Jerome} alt="" />
              <div className="flex gap-1 flex-col">
                <h1 className="text-[25px] font-semibold leading-8 font-Jakarta text-white ">
                  Jerome Larh
                </h1>
                <span className=" text-white font-Jakarta text-[20px] leading-7 font-light">
                  CEO XHIBIT
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[url(./assets/passionLedUs.svg)] bg-cover bg-center bg-no-repeat h-[400px]">
        <div className=" bg-dark_green/70 w-full h-full">
          <p className=" text-white w-[90%] text-center mx-auto py-[50px] font-Jakarta text-[20px] font-normal leading-10">
            Join Our Globally Diverse Team! We're a distributed team across
            various countries, and we're always expanding.
            <span className=" underline">
              Are you ready to be part of our dynamic journey?
            </span>
          </p>
        </div>
      </section>
      <section className="flex flex-col gap-[78px] py-[100px] w-[90%] mx-auto ">
        <h1 className="text-white font-Jakarta font-bold text-[31px] leading-[44px] text-center">
          Our Values
        </h1>
        <div className="flex flex-row gap-2 items-center md:w-[80%] md:ml-auto lg:w-1/2">
          <img
            src={Teamwork}
            alt=""
            className="kite-clip-path w-[150px] h-[150px] "
          />
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-[16px] font-semibold text-white">Teamwork</h1>
            <span className="text-[13px] text-white/80 font-normal leading-6">
              While every single XHIBIT member is capable of creating great
              things, we know that we're stronger as a team. Great
              communication, open and honest feedback, and recognizing each
              other's strengths are just some things that make us greater
              together.
            </span>
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center md:w-[80%] md:mr-auto lg:w-1/2">
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-[16px] font-semibold text-white">
              Go above and beyond
            </h1>
            <span className="text-[13px] text-white/80 font-normal leading-6">
              In both literal and figurative terms, we go above and beyond to
              ensure that members of XHIBIT have an exceptional experience on
              our platform. Whether they're developers, clients, or our own team
              members, we've gone as far as boarding flights to connect with
              team members and XHIBIT users.
            </span>
          </div>
          <img
            src={Teamwork}
            alt=""
            className="pentagon-clip-path w-[150px] h-[150px]"
          />
        </div>
      </section>
      <section className="w-full bg-primary_blue py-[50px] flex flex-col gap-[50px] ">
        <div className="flex items-center justify-center w-full gap-2">
          <img src={Logo} alt="" className="h-10 w-10" />
          <p className=" font-Jakarta text-[25px] text-white leading-9 font-medium">
            The Xhibit
          </p>
        </div>
        <p className=" font-Jakarta text-[16px] lg:text-[25px]  font-normal leading-6 text-center text-white w-[80%] mx-auto">
          Sign up now and connect with your next great hire! Your journey to
          exceptional talent begins here
        </p>
        <div className="flex items-center gap-[30px] justify-center">
          <Button className="py-4 px-5 text-primary_blue font-Jakarta text-[16px] flex gap-1 bg-white border-none outline-none hover:bg-white hover:border-none ">
            <Sparkles className=" text-primary_blue text-[20px] " />
            Hire talents
          </Button>
          <Button className="py-4 px-5 text-white font-Jakarta border text-[16px] bg-transparent border-white outline-none hover:bg-transparent hover:border-white ">
            Sign Up
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
