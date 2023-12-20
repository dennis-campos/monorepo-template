import { Card, CardDescription } from '@repo/ui/card';

export default function Home() {
  return (
    <main>
      <p className="bg-slate-400">fake bison template</p>
      <Card className="w-[400px] p-8 bg-foreground text-white shadow-xl">
        <CardDescription>hello world</CardDescription>
      </Card>
    </main>
  );
}
