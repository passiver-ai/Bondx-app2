import { GlobalLoader } from '@kit/ui/global-loader';

export default function Loading() {
  return (
    <div className="h-screen w-screen flex">
      <GlobalLoader />
    </div>
  );
}
