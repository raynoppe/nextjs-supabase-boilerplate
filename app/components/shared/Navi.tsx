import { HomeIcon, XCircleIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
export default function Navi(props:
    {
        id: string,
        area?: string,
        title?: string,
        closeNavi: Function
    }) {
    const Router = useRouter();
    const delayedCloseNavi = () => {
        setTimeout(() => { props.closeNavi() }, 300);
    }

    const goTo = (path: string) => {
        Router.push(path)
        props.closeNavi();
    }
    return (
        <>
            <div className=' max-sm:navi-backdrop-mobile sm:hidden' onClick={() => { props.closeNavi() }}></div>
            <div className=' max-sm:hidden sm:navi-backdrop-desktop' onMouseEnter={() => { props.closeNavi() }}></div>
            <div className=' max-sm:navi-inner-box-mobile sm:navi-inner-box-desktop shadow'>
                <div className='flex p-3 border-b sm:hidden'>
                    <div className=' flex-grow'>More...</div>
                    <div><XCircleIcon onClick={() => { props.closeNavi() }} className="h-6 w-6 mx-3 sm:h-4 sm:w-4 sm:mr-1 text-gray-500 cursor-pointer" /></div>
                </div>
                <div className=' max-sm:flex max-sm:flex-wrap justify-center p-3 overflow-auto h-[400px] '>
                    <div onClick={() => { goTo("/account") }} className="max-sm:btn-navi-mobile sm:btn-navi-desktop">
                        <UserCircleIcon className="btn-navi-mobile-icon sm:btn-navi-mobile-desktop" />
                        <span className=" text-xs sm:text-base mt-1 sm:mt-0">Account</span>
                    </div>
                    <Link href="/" className="max-sm:btn-navi-mobile sm:btn-navi-desktop">
                        <HomeIcon className="h-6 w-6 sm:h-4 sm:w-4 sm:mr-1 text-gray-500 " />
                        <span className=" text-xs sm:text-base mt-1 sm:mt-0">Home</span>
                    </Link>
                    <Link href="/" className="max-sm:btn-navi-mobile sm:btn-navi-desktop">
                        <HomeIcon className="h-6 w-6 sm:h-4 sm:w-4 sm:mr-1 text-gray-500 " />
                        <span className=" text-xs sm:text-base mt-1 sm:mt-0">Home</span>
                    </Link>
                    <Link href="/" className="max-sm:btn-navi-mobile sm:btn-navi-desktop">
                        <HomeIcon className="h-6 w-6 sm:h-4 sm:w-4 sm:mr-1 text-gray-500 " />
                        <span className=" text-xs sm:text-base mt-1 sm:mt-0">Home</span>
                    </Link>
                    <Link href="/" className="max-sm:btn-navi-mobile sm:btn-navi-desktop">
                        <HomeIcon className="h-6 w-6 sm:h-4 sm:w-4 sm:mr-1 text-gray-500 " />
                        <span className=" text-xs sm:text-base mt-1 sm:mt-0">Home</span>
                    </Link>
                    <Link href="/" className="max-sm:btn-navi-mobile sm:btn-navi-desktop">
                        <HomeIcon className="h-6 w-6 sm:h-4 sm:w-4 sm:mr-1 text-gray-500 " />
                        <span className=" text-xs sm:text-base mt-1 sm:mt-0">Home</span>
                    </Link>
                    <Link href="/" className="max-sm:btn-navi-mobile sm:btn-navi-desktop">
                        <HomeIcon className="h-6 w-6 sm:h-4 sm:w-4 sm:mr-1 text-gray-500 " />
                        <span className=" text-xs sm:text-base mt-1 sm:mt-0">Home</span>
                    </Link>
                    <Link href="/" className="max-sm:btn-navi-mobile sm:btn-navi-desktop">
                        <HomeIcon className="h-6 w-6 sm:h-4 sm:w-4 sm:mr-1 text-gray-500 " />
                        <span className=" text-xs sm:text-base mt-1 sm:mt-0">Home</span>
                    </Link>
                    <Link href="/" className="max-sm:btn-navi-mobile sm:btn-navi-desktop">
                        <HomeIcon className="h-6 w-6 sm:h-4 sm:w-4 sm:mr-1 text-gray-500 " />
                        <span className=" text-xs sm:text-base mt-1 sm:mt-0">Home</span>
                    </Link>
                    <Link href="/" className="max-sm:btn-navi-mobile sm:btn-navi-desktop">
                        <HomeIcon className="h-6 w-6 sm:h-4 sm:w-4 sm:mr-1 text-gray-500 " />
                        <span className=" text-xs sm:text-base mt-1 sm:mt-0">Home</span>
                    </Link>
                    <Link href="/" className="max-sm:btn-navi-mobile sm:btn-navi-desktop">
                        <HomeIcon className="h-6 w-6 sm:h-4 sm:w-4 sm:mr-1 text-gray-500 " />
                        <span className=" text-xs sm:text-base mt-1 sm:mt-0">Home</span>
                    </Link>
                    <Link href="/" className="max-sm:btn-navi-mobile sm:btn-navi-desktop">
                        <HomeIcon className="h-6 w-6 sm:h-4 sm:w-4 sm:mr-1 text-gray-500 " />
                        <span className=" text-xs sm:text-base mt-1 sm:mt-0">Home</span>
                    </Link>
                    <Link href="/" className="max-sm:btn-navi-mobile sm:btn-navi-desktop">
                        <HomeIcon className="h-6 w-6 sm:h-4 sm:w-4 sm:mr-1 text-gray-500 " />
                        <span className=" text-xs sm:text-base mt-1 sm:mt-0">Home</span>
                    </Link>
                    <Link href="/" className="max-sm:btn-navi-mobile sm:btn-navi-desktop">
                        <HomeIcon className="h-6 w-6 sm:h-4 sm:w-4 sm:mr-1 text-gray-500 " />
                        <span className=" text-xs sm:text-base mt-1 sm:mt-0">Home</span>
                    </Link>
                    <Link href="/" className="max-sm:btn-navi-mobile sm:btn-navi-desktop">
                        <HomeIcon className="h-6 w-6 sm:h-4 sm:w-4 sm:mr-1 text-gray-500 " />
                        <span className=" text-xs sm:text-base mt-1 sm:mt-0">Home</span>
                    </Link>

                </div>
            </div>
        </>

    )
}