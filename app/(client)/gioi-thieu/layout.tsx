export default function IntroductionPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-[100vw] p:h-[30vh] d:h-[700px] bg-center bg-[url(https://firebasestorage.googleapis.com/v0/b/quangcaocokhixaydung.appspot.com/o/3banner%20website.jpg?alt=media&token=81a2340e-aa93-49e2-a9e3-4470170703b5)] bg-no-repeat bg-cover">
        <div className="w-full h-full bg-[rgba(0,0,0,0.16)]"></div>
      </div>
      {children}
    </>
  );
}
