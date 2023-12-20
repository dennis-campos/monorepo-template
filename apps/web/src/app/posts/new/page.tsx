import { CreatePostForm } from './CreatePostForm';
import { Button } from '@repo/ui/button';

export default async function NewPostPage() {
  return (
    <div>
      <h1 className="text-5xl text-slate-800 mb-10">Create Post</h1>
      <CreatePostForm />
      <Button appName="web1">ASDF</Button>
    </div>
  );
}
