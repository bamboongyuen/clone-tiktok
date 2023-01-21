import { faLanguage, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const publicMenu = [
    [
        {
            icon: <FontAwesomeIcon icon={faLanguage} />,
            title: 'Tieng viet',
            children: [
                {
                    group: 'lang',
                    title: 'Tieng viet',
                    code: 'vn',
                    children: [
                        { group: 'lang', title: 'Tieng viet', code: 'vn' },
                        { group: 'lang', title: 'Tieng viet', code: 'vn' },
                        { group: 'lang', title: 'Tieng viet', code: 'vn' },
                        { group: 'lang', title: 'Tieng viet', code: 'vn' },
                        { group: 'lang', title: 'Tieng viet', code: 'vn' },
                        { group: 'lang', title: 'Tieng viet', code: 'vn' },
                        { group: 'lang', title: 'Tieng viet', code: 'vn' },
                    ],
                },
                { group: 'lang', title: 'Tieng viet', code: 'vn' },
                { group: 'lang', title: 'Tieng viet', code: 'vn' },
                { group: 'lang', title: 'Tieng viet', code: 'vn' },
                { group: 'lang', title: 'Tieng viet', code: 'vn' },
                { group: 'lang', title: 'Tieng viet', code: 'vn' },
                { group: 'lang', title: 'Tieng viet', code: 'vn' },
                { group: 'lang', title: 'Tieng viet', code: 'vn' },
                { group: 'lang', title: 'Tieng viet', code: 'vn' },
                { group: 'lang', title: 'Tieng viet', code: 'vn' },
                { group: 'lang', title: 'Tieng viet', code: 'vn' },
                { group: 'lang', title: 'Tieng viet', code: 'vn' },
                { group: 'lang', title: 'Tieng viet', code: 'vn' },
                { group: 'lang', title: 'Tieng viet', code: 'vn' },
                { group: 'lang', title: 'Tieng viet', code: 'vn' },
                { group: 'lang', title: 'Tieng viet', code: 'vn' },
                { group: 'lang', title: 'Tieng viet', code: 'vn' },
                { group: 'lang', title: 'Tieng viet', code: 'vn' },
                { group: 'lang', title: 'Tieng viet', code: 'vn' },
                { group: 'lang', title: 'Tieng viet', code: 'vn' },
                { group: 'lang', title: 'Tieng viet', code: 'vn' },
                { group: 'lang', title: 'Tieng viet', code: 'vn' },
            ],
        },
        { icon: <FontAwesomeIcon icon={faPeopleGroup} />, title: 'Ho tro' },
        { icon: <FontAwesomeIcon icon={faLanguage} />, title: 'Tieng viet' },
        { icon: <FontAwesomeIcon icon={faLanguage} />, title: 'Tieng viet' },
    ],
];

export const privateMenu = [
    { icon: <FontAwesomeIcon icon={faPeopleGroup} />, title: 'Ho tro' },
    { icon: <FontAwesomeIcon icon={faLanguage} />, title: 'Tieng viet' },
    { icon: <FontAwesomeIcon icon={faLanguage} />, title: 'Tieng viet' },
    ...publicMenu,
];
