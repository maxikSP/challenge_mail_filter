# 10-01-2016 UPDATE: results are not final yet.

We received comments on the mesurement methods, and we are re-checking them. After comments are resolved, the results will be finilized, and prizes will be send.

# Hola JS Challenge Winter 2015 (Mail Filtering Engine): Initial Results

In winter 2015, we held a [programming contest](http://hola.org/challenge_mail_filter). Thanks to all who participated!

The problem statement and detailed rules are available on the contest page linked above. Now that the contest is over, we're publishing all the solutions we received, and announcing the winners.

## Statistics

We received a total of 408 submissions from 237 different participants. Only the last submission from each participant, received within the deadline, is published here in the `submissions` directory.

An additional 7 solutions were submitted either after the deadline or by Hola employees, and we considered them hors concours (off-contest). These are found in the `extra` directory.

64 solutions, or 16% of the total number, were submitted within the last 24 hours before the deadline; 15 of these were submitted within the last hour, and last one of these only 34 seconds before the deadline.

114 programs, or 48% of all participating solutions, passed our correctness tests.

The shortest correct submission is exactly 666 bytes long, while the longest one is 90274 bytes long.

## The testing methodology

The correctness and performance tests were automatic. Both kinds of testing are performed by `tests/test.js`.

The correctness tests are simple and can be found in the body of the test program. Unfortunately, many of the submissions failed on one or another corner case. Syntax errors, use of `require` (forbidden by the rules), and failure to export a `filter` function were considered correctness failures. If you are wondering why a particular solution failed, you can run the test program on the solution file and see the output.

Performance testing consisted of one large test with 100,000 messages and 100 rules. The inputs for this test (`tests/large_input.json`) were generated by `tests/generate_large_test.js`; to produce the outputs (`tests/large_output.json`), the reference implementation was used. The generating script uses a random number generator with a fixed seed, so that it produces the same output on every run. The statistical characteristics that we chose for the performance test are somewhat plausible for a real e-mail database of a typical user. Please refer to the script's source code for further details.

The performance tests were run on a 3 GHz Intel Core i7 machine running 64-bit Debian GNU/Linux (testing). Each submission was run 10 times, and the best time was selected. We re-initialized the Node.js VM with the participant's module before each call to the `filter` function. The timing was taken by the real-time clock; it included the module parsing and initialization time.

Our [reference implementation](http://hola.org/challenge_mail_filter#reference), the same as was set up on our website, is included here as `tests/reference.js`. The reference implementation includes strict input validity testing and an optional input size limitation (to restrict the load on the website); neither of these features was expected of contest submissions.

### The export controversy

After we published the contest rules, we realized that one of the requirements was ambiguous: “Your task is to write a Node.js module exporting one single function `filter(messages, rules)`”. We originally intended it to mean a named export:

```
exports.filter = function(messages, rules){ ... };
```

However, many participants interpreted it differently:

```
module.exports = function(messages, rules){ ... };
```

Both seem to be coherent interpretations of the rules, and we decided to accept either way of exporting.

Yet some other submissions did not export the function at all, but merely defined it in their source files:

```
function filter(messages, rules){ ... }
```

Because the rules clearly say “exporting”, we considered such solutions as failing. Nevertheless, we tried to fix each of these solutions and see if they would then pass. Only one solution passed, and was considered hors concours (see remark [3] in the final standings below).

## Final standings

The scores in this table are the best times achieved in performance testing, in milliseconds. Solutions for which there isn't a performance score in the table, failed correctness tests.

Because two participants shared the second place, we increased the prize budget by 500 USD, and awarded them 750 USD each. Finally, we decided to award the 350 USD special prize to the author of the shortest correct submission.

Congratulations to the winners!

Place | Name                                | Score | Remark
-----:|-------------------------------------|------:|----------------------
    1 | Denis Kreshikhin                    |   282 | **1500 USD prize**
      | Ecma Scripter                       |   330 | Disqualified[1]
    2 | Ilya Makarov                        |   356 | **750 USD prize**[2]
    2 | Yuri Kilochek                       |   356 | **750 USD prize**[2]
    3 | Sergey Golub                        |   387 | **500 USD prize**
    4 | fb5813a09c0f95242cb                 |   407 |
    5 | yuri_c                              |   451 |
    6 | Petr Shalkov                        |   469 |
    7 | Evgeny Zeyler                       |   475 |
    8 | R5t4nah6                            |   488 |
    9 | Elshad Shirinov                     |   505 |
   10 | Dmitry Rybin                        |   507 |
   11 | Denys Skychko                       |   523 |
   12 | Pavel Gruba                         |   524 |
   13 | Sergey Petkun                       |   536 |
   14 | Andrey Kostakov                     |   550 |
      | Typealias Nonmutating               |   561 | Hors concours
   15 | Vladimir Barbarosh                  |   572 |
   16 | Ionicman                            |   584 |
   17 | Sergey Mikhailovich                 |   602 |
   18 | Andrey Chernykh                     |   617 |
   19 | Alex Kheben                         |   627 |
   20 | Maxim Drozdov                       |   629 |
   21 | Hayk Martirosyan                    |   663 |
   22 | Maxim Khoruzhko                     |   676 |
   23 | Dmitry Podgorniy                    |   678 |
   24 | Oleg Popov                          |   699 |
   25 | Igor Klopov                         |   717 |
   26 | Andrew Kashta                       |   807 |
   27 | Roman Pletnev                       |   817 |
   28 | Alina Lozhkina                      |   821 |
      | Pavel Kingsep                       |   821 | Hors concours
   29 | Stas Vasilyev                       |   831 |
      | Dmitry Rybin                        |   857 | Hors concours
   30 | Vladislav Nezhutin                  |   878 |
   31 | Ruslan Koptev                       |   893 |
   32 | Danila Sukhanov                     |   909 |
   33 | Alexander Zonov                     |   926 |
   34 | Alexey Larkov                       |   928 |
   35 | Alexander Ilyin                     |   947 |
   36 | Nickolay Savchenko                  |   951 |
   37 | Ilya Mochalov                       |   953 |
   38 | Arkadi Klepatch                     |   960 |
   39 | Serj Karasev                        |  1000 |
   40 | Yuriy Khabarov                      |  1044 |
   41 | Vladimir Privalov                   |  1072 |
   42 | Nikolay Karev                       |  1080 |
   43 | Valeriy Petlya                      |  1125 |
   44 | Denis Protasov                      |  1166 |
   45 | Sergey Savelyev                     |  1175 |
      | Aur Saraf                           |  1184 | Hors concours
   46 | Aydar Mirzagitov                    |  1246 |
   47 | Ori Lahav                           |  1258 |
   48 | KingOfNothing                       |  1308 |
   49 | Georgy Chebanov                     |  1358 |
   50 | Denis Kepeshchuk                    |  1433 |
   51 | Jarek Płocki                        |  1477 |
   52 | Stanislav Vyshchepan                |  1521 |
      | Evgeny Semyonov                     |  1601 | Needed a fix[3]
   53 | Taras Ozarko                        |  1634 |
   54 | Black Knight                        |  1771 |
   55 | Dmitry Egorov                       |  1844 |
   56 | Anton Podkuyko                      |  1892 |
   57 | Sergey Lichack                      |  1935 |
   58 | Zibx                                |  2014 |
   59 | Vitalii Petrychuk                   |  2183 |
   60 | Vasiliy Kostin                      |  2203 |
   61 | Alexey Chemichev                    |  2327 |
   62 | Evgenii Kazmiruk                    |  2339 |
   63 | Pavel Koltyshev                     |  2363 |
   64 | Aleksey Sergey                      |  2418 |
   65 | Alexey Pushnikov                    |  2420 |
   66 | Max Brodin                          |  2616 |
   67 | serviceman                          |  2771 |
   68 | Alexander Rusakov                   |  2871 |
   69 | Ruslan Minukov                      |  2873 |
   70 | Andrey Grankin                      |  2877 |
   71 | Kobi                                |  2931 |
   72 | Alex Ku                             |  3037 |
   73 | Evgeny Lukianchikov                 |  3065 |
   74 | Nadav Ivgi                          |  3172 | **350 USD special prize**
   75 | Alexander Savchuk                   |  3182 |
   76 | Alexey Sadovin                      |  3185 |
   77 | Vitali Falileev                     |  3213 |
   78 | Siroj Matchanov                     |  3214 |
   79 | Aleksei Murashin                    |  3233 |
   80 | Ivan Zakharchenko                   |  3465 |
   81 | Vitaly Dyatlov                      |  3505 |
   82 | Katerina Pavlenko                   |  3619 |
   83 | Vyacheslav Bazhinov                 |  3733 |
   84 | Denis Bezrukov                      |  4118 |
   85 | Andy5938                            |  4425 |
   86 | Volodymyr Valkiv                    |  4450 |
   87 | berrunder                           |  4625 |
   88 | Konstantin Boyandin                 |  4674 |
   89 | Oz GabsoZ                           |  4675 |
   90 | nerv                                |  5174 |
   91 | Igor Potapov                        |  5813 |
   92 | Nikolay Shevlyakov                  |  5875 |
   93 | Sergey Ivanov                       |  6207 |
   94 | Alexey Kolpakov                     |  6240 |
   95 | Dan Revah                           |  6258 |
   96 | Vladimir Osipov                     |  6518 |
   97 | Vitaliy (vint)                      |  6581 |
   98 | Vitali Koshtoev                     |  6883 |
   99 | Pavel Orlov                         |  7725 |
  100 | Amir Absalyamov                     |  7808 |
  101 | Vyacheslav Ryabinin                 |  8340 |
  102 | Daniil Onoshko                      |  8387 |
  103 | Dmitry Tarasenko                    |  9883 |
  104 | Andrey Pogoreltsev                  | 10708 |
  105 | Slava Shklyaev                      | 10742 |
  106 | Nikita Isaev                        | 13351 |
  107 | Nikolay Kuchumov                    | 13551 |
  108 | Kirill Bykov                        | 15773 |
  109 | Ilya Chervonov                      | 16426 |
  110 | Igor Vladimirovich                  | 17651 |
  111 | Shantanu Gupta                      | 21054 |
  112 | Artem Mitloshuk                     | 22244 |
  113 | Nikita Polevoy                      | 58050 |
      | Adam Yahid                          |       |
      | Aleksandrs Fiļipovs                 |       |
      | Alex Netkachov                      |       |
      | Alex Vishnevsky                     |       |
      | Alexander Baygeldin                 |       |
      | Alexander Dubovsky                  |       |
      | Alexander Hasselbach                |       |
      | Alexander Kazachenko                |       |
      | Alexander Nurullov                  |       |
      | Alexander Oryol                     |       |
      | Alexander Zasim                     |       |
      | Alexey Alexandrovich                |       |
      | Alexey Diyachenko                   |       |
      | Alexey Efremov                      |       |
      | Alexey Gora                         |       |
      | Alexey Nichiporchik                 |       |
      | Alexey Semashkevich                 |       |
      | Alexey Vedyakov                     |       |
      | Almaz Mubinov                       |       |
      | Anatoly                             |       |
      | Andrey Kuznetsov                    |       |
      | Andrey Saponenko                    |       |
      | Andrey Solodovnikov                 |       |
      | Anton Ivakin                        |       |
      | Anton Vashurkin                     |       |
      | Artem Kudryavtsev                   |       |
      | Arthur Khusaenov                    |       |
      | Arthur Okeke                        |       |
      | Bilik Sandanov                      |       |
      | Daniel Shir                         |       |
      | Danil Baibak                        |       |
      | Denis Bogomoltsev                   |       |
      | Denis Karavayev                     |       |
      | Denis Maslov                        |       |
      | Denis Zakharov                      |       |
      | Dilshod Samatov                     |       |
      | disamis                             |       |
      | Dizzy D                             |       |
      | Dmitry Fedoryak                     |       |
      | Dmitry Kurochkin                    |       |
      | Dmitry Petrov                       |       |
      | Dmitry Poddubniy                    |       |
      | Dmitry Soloviev                     |       |
      | Dzmitry Ulasiankou                  |       |
      | Evgeny Frolov                       |       |
      | Evgeny Khramkov                     |       |
      | Evgeny Olonov                       |       |
      | Evgeny Shiryaev                     |       |
      | Grigory Alexeev                     |       |
      | Grigory Plotnikov                   |       |
      | Guy Brukhis                         |       |
      | Guy Rapaport                        |       |
      | Haim Kom                            |       |
      | Haim Kom                            |       |
      | happymarmoset                       |       |
      | Hongliang Wang                      |       |
      | Ice Kibitzer                        |       |
      | Ido Ran                             |       |
      | Igal Miroshnichenko                 |       |
      | Igor Malanyk                        |       |
      | Ihor Barakaiev and Dmitry Karaush   |       |
      | Ilya Gelman                         |       |
      | Ilya Kirichek                       |       |
      | Itay Komemy                         |       |
      | Ivan Lukashov                       |       |
      | Ivan Maltsev                        |       |
      | Ivan Nikitin                        |       |
      | Ivan Saloid                         |       |
      | Jean-Philippe Gauthier              |       |
      | jsmeister                           |       |
      | Kazim                               |       |
      | Kedem Diamant                       |       |
      | Kirill Yakovlev                     |       |
      | Konstantin Petryaev                 |       |
      | Kwek Jing Yang                      |       |
      | Lee Elenbaas                        |       |
      | Leonid Kuznetsov                    |       |
      | madshall                            |       |
      | MakarovEm                           |       |
      | Maksim Razumenko                    |       |
      | Mark Gubarev                        |       |
      | Max Leizerovich                     |       |
      | Moshe Revah                         |       |
      | Muthuswami Lakshminarayanan Susheel |       | Hors concours
      | mycodef                             |       |
      | Nikita Molostvov                    |       |
      | Nikolay Olonov                      |       |
      | Nurguly Ashyrov                     |       |
      | Oleg Panchenko                      |       |
      | Oleh Tsiroh                         |       |
      | Oleksandr Antonyuk                  |       |
      | Ouanalao                            |       |
      | Oz Shapira                          |       |
      | Pavel Pogodaev                      |       |
      | Pavel Polyakov                      |       |
      | Pavel Tomsha                        |       |
      | Pham Vu Tuan                        |       |
      | poluyanov                           |       |
      | Ptax                                |       |
      | qeled                               |       |
      | Raoul Foaleng                       |       |
      | Roman Timashev                      |       |
      | Rostislav Galkin                    |       |
      | Ruslan Bekenev                      |       |
      | Sashko Matviychuk                   |       |
      | Sergey Kluchkovsky                  |       |
      | Sergey Serebryakov                  |       |
      | Sergey Tolok                        |       |
      | Sergii Iakymov                      |       |
      | Sergius Galjuk                      |       |
      | Serhiy Mitrovtsiy                   |       |
      | Stepan Pupkin                       |       |
      | taitulism                           |       |
      | Tan Ying Hao                        |       |
      | Timophey Nakhai                     |       |
      | Victor Follet                       |       |
      | Vitaliy Sunny                       |       |
      | Vitaly Domnikov                     |       |
      | Vladimir Menshakov                  |       |
      | Vladimir Prikhozhenko               |       |
      | Xawn Tan                            |       |
      | Yair Haimovitch                     |       |
      | Yury Loskot                         |       |

### Remarks

[1] We disqualified one participant for trying to fool the test framework. Check their solution if you want to see how. Interestingly, the submission still wasn't the fastest.

[2] Two participants share the second place because their submissions showed equal performance to the precision that we could measure it. Whatever small difference there might have been, was way below the noise floor, so we couldn't say confidently that one or the other was faster.

[3] The submission passed correctness tests after adding a proper export of the `filter` function. The entry was therefore not assigned a rank in the final standings.

## Stay tuned

More programming challenges to follow!
