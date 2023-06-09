#include<stdio.h>

int swap (int *x, int *y);

int swap (int *x, int *y)
{
    int temp;

    printf("In swap, 互换前：x = %d, y = %d\n", *x, *y);

    temp = *x;
    *x = *y;
    *y = temp;

    printf("In swap, 互换后:x = %d, y = %d\n", *x, *y);
}
int main(void)
{
    int x = 3, y = 5;

    printf("In main, 互换前:x = %d, y = %d\n", x, y);

    swap(&x, &y);

    printf("In main, 互换后:x = %d, y = %d\n", x, y);

    return 0;
}
