svn mergeinfo path/to/svn/branch/1 path/to/svn/branch/2 --show-revs eligible --log --incremental | out-file "dev2test.log" -encoding utf8

node index.js dev2test

pause