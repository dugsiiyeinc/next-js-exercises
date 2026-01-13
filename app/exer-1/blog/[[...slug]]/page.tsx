interface BlogPageProps {
    params: {
      slug?: string[]
    }
  }
  
  export default async function blogPage({ params }: BlogPageProps) {
    const { slug } = await params;
    return (
      <div>
        Blog Page {slug?.join("/")}
      </div>
    )
  }
  