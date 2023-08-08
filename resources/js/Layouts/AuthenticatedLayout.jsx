import NavbarDefault from '@/Components/nav/nav';

export default function Authenticated({ children }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <NavbarDefault />
            <main>{children}</main>

        </div>
    );
}
