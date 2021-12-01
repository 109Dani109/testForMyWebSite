#include <iostream>
using namespace std;
int main() {

    int N , celMaiMare = 0, celMaiMic = 9999;

    cin>> N;

    for(int i = 1; i<=N; i++) {
        cin>> N;
        if(N > celMaiMare) {
            celMaiMare = N;        
        }

        if(N < celMaiMic) {
            celMaiMic = N;        
        }
    }


    cout<< celMaiMare << " ";
    cout<< celMaiMic << " ";

    return 0;
}