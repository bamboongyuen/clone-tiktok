import {
    faCommentDots,
    faFootball,
    faHammer,
    faKeyboard,
    faLanguage,
    faMoon,
    faPeopleGroup,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const publicMenu = [
    [
        {
            icon: <FontAwesomeIcon icon={faLanguage} />,
            title: 'Tiếng Việt',
            children: [
                {
                    group: 'lang',
                    title: 'Tiếng Việt',
                    code: 'vn',
                    children: [
                        { group: 'lang', title: 'Tiếng Việt', code: 'vn' },
                        { group: 'lang', title: 'English', code: 'en' },
                        { group: 'lang', title: 'Cambodia', code: 'ca' },
                        { group: 'lang', title: 'Lao', code: 'la' },
                        { group: 'lang', title: 'China', code: 'cn' },
                        { group: 'lang', title: 'Japan', code: 'jp' },
                        { group: 'lang', title: 'Indonesia', code: 'in' },
                    ],
                },
                { group: 'lang', title: 'Tiếng Việt', code: 'vn' },
                { group: 'lang', title: 'English', code: 'en' },
                { group: 'lang', title: 'Cambodia', code: 'ca' },
                { group: 'lang', title: 'Lao', code: 'la' },
                { group: 'lang', title: 'China', code: 'cn' },
                { group: 'lang', title: 'Japan', code: 'jp' },
                { group: 'lang', title: 'Indonesia', code: 'in' },
                { group: 'lang', title: 'French', code: 'fr' },
                { group: 'lang', title: 'American', code: 'am' },
                { group: 'lang', title: 'Colombia', code: 'co' },
                { group: 'lang', title: 'Thái Lan', code: 'tl' },
                { group: 'lang', title: 'Singapore', code: 'si' },
                { group: 'lang', title: 'Australia', code: 'au' },
                { group: 'lang', title: 'Korea', code: 'ko' },
                { group: 'lang', title: 'Ấn độ', code: 'as' },
                { group: 'lang', title: 'Angular', code: 'ag' },
                { group: 'lang', title: 'Rusia', code: 'ru' },
                { group: 'lang', title: 'UAE', code: 'ua' },
            ],
        },
        { icon: <FontAwesomeIcon icon={faPeopleGroup} />, title: 'Hổ trợ' },
        { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Phím tắt' },
        { icon: <FontAwesomeIcon icon={faMoon} />, title: 'Chế độ' },
    ],
];

export const privateMenu = [
    { icon: <FontAwesomeIcon icon={faFootball} />, title: 'Theo dõi' },
    { icon: <FontAwesomeIcon icon={faHammer} />, title: 'Cài đặt' },
    { icon: <FontAwesomeIcon icon={faCommentDots} />, title: 'Tin nhắn' },
    ...publicMenu,
];
