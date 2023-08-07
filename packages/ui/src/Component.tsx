import { cn } from 'mxcn';

function Component({className, children} : {className: string, children: React.ReactNode}) {
  return (
    <>
      <div className={cn('text-center text-red-500', className)}>
        {children}
      </div>
    </>
  )
}

export default Component;
