import { Header } from '~/components';
import { Sidebar } from '~/components';

function HeaderOnly({ children }) {
    console.log(children);
    return (
        <>
            <Header />
            <div className="container">{children}</div>
        </>
    );
}

export default HeaderOnly;
