svn mergeinfo path/to/svn/branch/1 path/to/svn/branch/2 --show-revs eligible --log --incremental | out-file "test2online.log" -encoding utf8

node index.js test2online

pause