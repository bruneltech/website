#!/bin/bash
ln -s /save/node_modules/* ./node_modules/.
echo INTERNAL PORT IS ${BT_INTERNAL_PORT}
gatsby develop -H 0.0.0.0 -p ${BT_INTERNAL_PORT}