for name in *.md
do
    newname="$(echo "$name" | cut -c12-)"
    mv "$name" "$newname"
done
