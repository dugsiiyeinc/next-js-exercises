export const dynamic = 'force-dynamic';

export default function About() {
    const now=new Date().toLocaleTimeString();
    return (
        <div>
            <h1>About</h1>
            <p>The time is {now}</p>
        </div>
    )
}