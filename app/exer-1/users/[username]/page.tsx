interface UserDetailPageProps {
    params:{
        username:string
    }
}
export default async function userDetailPage({params}:UserDetailPageProps) {
    const { username } = await params;
    return (
        <div className="text-3xl ">
            Welcome, {username}!
        </div>
    )
}