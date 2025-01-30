
import GroupLogo from '../assets/logoGroup.png';
import Maps from '../assets/maps.png';
import Stiker from '../assets/stiker.png';

import { Link } from 'react-router';
import { useUserContext } from '../context/UserContext';

export default function BubbleChat({ senderName, message, timestamp, isContinue, isSender, isImage, isSticker }) {
    const { openSticker, setOpenSticker } = useUserContext();

    const colors = [
        "var(--color-secondary)",
        "var(--color-accent)",
        "var(--color-shadow)",
    ];

    const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

    return (
        <div className='w-full h-fit'>
            {!isSender ?
                <div className="w-full h-fit flex flex-row items-start justify-start gap-4">
                    <div className="w-[36px] h-[36px] rounded-full overflow-hidden">
                        {
                            !isContinue && <img src={GroupLogo} alt="Grup Warga Sukahati" className='w-full h-full' />
                        }
                    </div>
                    <div className='max-w-[70%] relative active:scale-95 active:duration-300 active:opacity-80'>
                        <div className="absolute top-0 -left-3 w-0 h-0">
                            {!isContinue &&
                                <svg width="24" height="24" viewBox="0 0 10 10" className="transform rotate-90">
                                    <polygon points="0,0 10,0 0,10" fill="white" />
                                </svg>
                            }
                        </div>
                        <div className={`bg-white ${!isContinue ? "rounded-r-xl rounded-b-xl" : "rounded-xl"} p-4 inline-block w-full`}>
                            <div className="w-full flex flex-col items-start">
                                {!isContinue && <p className="text-xs" style={{ color: getRandomColor() }}>{senderName}</p>}
                                <p className="text-sm">{message}</p>
                            </div>
                            <div className="w-full flex justify-end">
                                <p className="text-xs opacity-50">{timestamp}</p>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="w-full h-fit flex flex-row items-start justify-end">
                    <div className='max-w-[70%] relative active:scale-95 active:duration-300 active:opacity-80'>
                        {isSticker ?
                            <div className='w-full flex flex-col items-end animate-pulse' onClick={() => {openSticker ? setOpenSticker(false) : setOpenSticker(true)}}>
                                <div className='w-[80%] h-auto'>
                                    <img src={Stiker} alt='Sticker' />
                                </div>
                                <div className="bg-green-300 w-fit p-2 rounded-xl">
                                    <p className="text-xs opacity-50">{timestamp}</p>
                                </div>
                            </div>
                            :
                            <>
                                <div className="absolute top-0 right-3 w-0 h-0">
                                    {!isContinue &&
                                        <svg width="24" height="24" viewBox="0 0 10 10" className="transform rotate-90 -scale-y-100 text-green-300">
                                            <polygon points="0,0 10,0 0,10" fill="currentColor" />
                                        </svg>
                                    }
                                </div>
                                <div className={`bg-green-300 ${!isContinue ? "rounded-l-xl rounded-b-xl" : "rounded-xl"} p-2 inline-block w-full`}>
                                    <div className="w-full flex flex-col items-start">
                                        {isImage ?
                                            <Link to='https://maps.app.goo.gl/zBNjFE6ffcvgttq98' target='__blank' className='w-full overflow-hidden rounded-xl'>
                                                <img src={Maps} alt='Maps Message' className='w-full object-cover'></img>
                                            </Link>
                                            :
                                            <p className="text-sm">{message}</p>
                                        }
                                    </div>
                                    <div className="w-full flex justify-end pt-2">
                                        <p className="text-xs opacity-50">{timestamp}</p>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </div>
            }

        </div>
    )
}