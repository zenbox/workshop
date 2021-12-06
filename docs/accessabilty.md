# Accessabilty
## Check the semantic
### remove non-semantic code, use find and replace with nothing
#### Remove non-semantic elements
- **div** - ```<(/|)div[ a-z0-9-_=";:]*>```
- **span** - ```<(/|)span[ a-z0-9-_=";:]*>```
- **link** - ```<link [ a-z0-9»+-_.:;%="/]*>```

### Remove non-semantic properties
- **classes** -```class="[ a-z0-9-_]*"```
- **styles** - ```style="[ a-z0-9-_:;%]*"```

### Remove other
- **comments** - ```<!--[a-z0-9 -_#]*-->```
- **double line breaks** ```\n\n```replace with ```\n```
- **scripts** - ```<script.*>([.][\s]?)*</script>``` (noch nicht für mehrzeilige Scripte.)