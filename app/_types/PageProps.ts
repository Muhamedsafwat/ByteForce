interface PageProps {
    params: { lang: 'ar' | 'en'; id: string };
    searchParams: { [key: string]: string | string[] | undefined };
  }
  
  export default PageProps;
  