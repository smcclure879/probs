use strict;


my $billion=1024*1024*1024;

# Return the hashed value of a string: $hash = perlhash("key")
# (Defined by the PERL_HASH macro in hv.h)
sub hashit {
    my $o = shift;
    my $factor = shift;

    my $retval = 0;
    foreach (split //, $o) {
	$retval = $retval*$factor + ord($_);
	$retval = $retval % $billion;
    }
    return $retval;
}


sub hashit2 {
    return hashit(reverse(shift),37);
}
sub hashit1 {
    return hashit(shift,33);
}



my $fhr;
my $string;
{
    local $/ = undef;
    open $fhr, "words1.txt" or die "Couldn't open file: $!";
    binmode $fhr;
    $string = <$fhr>;
    close $fhr;
}

my @arr=[];
my $ii=0; 
my @words = split /\s+/,$string; 
for my $word (@words) {
    
    #hash is longer than 1 int...
    my $h1 = hashit1($word);
    my $h2 = hashit2($word);

    my $k = 6;
    my $b = 200000;

    my @p=[];
    my $h = ".$h1.$h2.";
    my $preSetBits = 0; #it could be, right now
    my $disp = '';
    for(my $jj=0; $jj<$k; $jj++) {
	
	my $bitPos = $h1 % $b;
	$h1 /= $b;
	if ($h1 < 999) {
	    print "x";
	    $h1 += $h2*2/(2+$jj)*3+$jj*2+$jj/2;
	}

	$preSetBits++ if $arr[$bitPos];
	$arr[$bitPos] .= $word;

	$disp .= " ";
	$disp .= $bitPos;
    }

    print "$word $h $disp\n";

    if ($preSetBits == $k) {
	print "---DUP??--";
	exit;
    }

    $ii++;
    print $ii,"\n";
    last if $ii>10000;
}



