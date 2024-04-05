import localFont from 'next/font/local'

export const cozeyRegular = localFont({
    src: '../../public/fonts/Cozey-Regular-Web.woff'
})

export const haffer = localFont({
    src: [
        {
            path: '../../public/fonts/HafferXH-Regular.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/HafferXH-Medium.woff',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/HafferXH-SemiBold.woff',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../public/fonts/HafferXH-Bold.woff',
            weight: '700',
            style: 'normal',
        },
    ],
})

export const larsseit = localFont({
    src: '../../public/fonts/Larsseit.otf'
})
