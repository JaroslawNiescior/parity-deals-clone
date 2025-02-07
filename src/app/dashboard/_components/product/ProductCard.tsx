import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Product } from './ProductTypes';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import AddToSiteProductModal from './AddToSiteProductModal';
import { AlertDialog, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import DeleteProductAlertDialog from './DeleteProductAlertDialog';

export default function ProductCard({ id, name, url, description }: Product) {
  return (
    <Card>
      <CardHeader>
        <div className="flex gap-2 justify-between items-end">
          <CardTitle>
            <Link href={`/dashboard/products/${id}/edit`}>{name}</Link>
          </CardTitle>
          <Dialog>
            <AlertDialog>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="size-8 p-0">
                    <div className="sr-only">Action Menu</div>
                    <DotsHorizontalIcon className="size-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href={`/dashboard/products/${id}/edit`}>Edit</Link>
                  </DropdownMenuItem>
                  <DialogTrigger asChild>
                    <DropdownMenuItem>Add To Site</DropdownMenuItem>
                  </DialogTrigger>
                  <DropdownMenuSeparator />
                  <AlertDialogTrigger asChild>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </AlertDialogTrigger>
                </DropdownMenuContent>
              </DropdownMenu>
              <DeleteProductAlertDialog id={id} />
            </AlertDialog>
            <AddToSiteProductModal id={id} />
          </Dialog>
        </div>
        <CardDescription>{url}</CardDescription>
      </CardHeader>
      {description && (
        <CardContent className="truncate">{description}</CardContent>
      )}
    </Card>
  );
}
