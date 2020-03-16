#include <stdio.h>
#include <unistd.h>
#include <string.h>

void MainMenu();
void AdsSleep(int milliSeconds);

int main()
{
    //    printf("Hello World!");
    //    return 0;
    // printf("started \n");
    MainMenu();
    return 0;
}

void MainMenu()
{
    // while (1)
    // {
    char arg1[20] = "";
    int arg2;
    int arg3;
    int arg4;
    int arg5;
    // AdsReturn("{\"reply\":true,\"mainMenu\":true,\"message\":\"Enter the menu options\",\"isBoot\":true}");
    printf("Enter the menu option: ");
    scanf("%s %d %d %d %d", &arg1, &arg2, &arg3, &arg4, &arg5);
    // fflush(stdin);
    char output[256];
    snprintf(output, sizeof output, "Scanned %s, %d, %d, %d, %d", arg1, arg2, arg3, arg4, arg5);
    printf(output);

    AdsSleep(2000);

    snprintf(output, sizeof output, "Executing for %s, %d, %d, %d, %d", arg1, arg2, arg3, arg4, arg5);
    printf(output);

    if (0 == strcmp(arg1, "-wftest"))
    {
        char output[256];
        snprintf(output, sizeof output, "Executing DiagnosticTest of %d, %d, %d", arg2, arg3, arg4, arg5);
        printf(output);
        // DiagnosticTest(arg2, arg3, arg4, arg5);
    }
    else if (0 == strcmp(arg1, "-boot"))
    {
        char output[256];
        snprintf(output, sizeof output, "Executing boot of %d, %d, %d", arg2, arg3, arg4, arg5);
        printf(output);
        AdsSleep(5000);
        printf("\nAll process done\n");
    }
    else
    {
        // fflush(stdin);
        printf("\n Incorrect usage. Correct usage is sudo [./AppName.exe] [-dg|-is|-mwf|-dm] [opt1: BreakingTime(ms)]\n");
        printf("\n Incorrect usage. Correct usage is sudo [./AppName.exe] [-dg|-is|-mwf|-dm] [opt1: BreakingTime(ms)]\n");
        // AdsReturn("{\"reply\":false,\"message\":\"Something went wrong! Please contact support team.\"}");
    }
    // }
}

void AdsSleep(int milliSeconds)
{
    //printf("\nSleep of %d ms. Press enter to continue after sleep", milliSeconds);
    usleep(milliSeconds * 1000);
    //getchar();
}