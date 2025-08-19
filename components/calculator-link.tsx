import { Button } from '@/components/ui/button';

export default function CalculatorLink() {
  return (
    <a
      href='https://www.advancedalloys.co.uk/alloy-calculator/'
      target='_blank'
      rel='noopener noreferrer'
    >
      <Button size='lg' className='rounded-full border-2 px-4 py-2'>
        <span className='text-lg'>Alloy Calculator</span>
      </Button>
    </a>
  );
}
