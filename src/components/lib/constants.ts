import excercise from '../../assets/images/icon-exercise.svg'
import play from '../../assets//images/icon-play.svg'
import selfcare from '../../assets//images/icon-self-care.svg'
import social from '../../assets/images/icon-social.svg'
import study from '../../assets//images/icon-study.svg'
import work from '../../assets//images/icon-work.svg'

export interface CategoryConfig {
    label: string;
    icon: string;
    colorClass: string;
}

export const CATEGORY_CONFIG: Record<string, CategoryConfig> = {
    Work:{
        label: 'Work',
        icon: work,
        colorClass: 'bg-blue-400'
    },
    Play: {
        label: 'Play',
        icon: play,
        colorClass: 'bg-blue-400',
    },
    Study: {
        label: 'Study',
        icon: study,
        colorClass: 'bg-red-400',
    },
    Exercise: {
        label: 'Exercise',
        icon: excercise,
        colorClass: 'bg-green-400',
    },
    Social: {
        label: 'Social',
        icon: social,
        colorClass: 'bg-violet-400',
    },
    'Self Care': {
        label: 'Self Care',
        icon: selfcare,
        colorClass: 'bg-yellow-400',
    },
}